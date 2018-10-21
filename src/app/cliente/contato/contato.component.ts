import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContatoService } from './contato.service';

import { SwalComponent } from '@toverux/ngx-sweetalert2';

import { Email } from './contato.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent implements OnInit {

  items: Observable<any[]>;
  email: Email;

  contatos: any;
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;

  constructor(
      db: AngularFirestore,
      private router: Router,
      public contatoService: ContatoService) {

      this.contatos = db.collection<Email>('contatos');
  }

  ngOnInit() {

  }

  validate(invalid, dirty, touched) {

    if (invalid && (dirty || touched)) {
      return true;
    } else {
      return false;
    }

  }


  reloadPage() {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.router.navigated = false;
    this.router.navigate([this.router.url]);
  }

  enviar(dados) {

    dados['subject'] = 'BLOG - ' + dados['subject'];

    this.deleteSwal.show();
    this.reloadPage();
    this.contatos.add(dados);

    this.contatoService.enviarEmail(dados);
  }


}
