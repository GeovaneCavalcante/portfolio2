import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SwalComponent } from '@toverux/ngx-sweetalert2';

import { Email } from './contato.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent implements OnInit {

  items: Observable<any[]>;
  name: string;
  msg: string;
  mail: string;
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;

  constructor(
      db: AngularFirestore,
      private router: Router) {

    this.items = db.collection('contatos').valueChanges();
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

  enviar(value) {
    this.deleteSwal.show();

    this.mail = '';
    this.msg = '';
    this.name = '';

    this.reloadPage();
  }


}
