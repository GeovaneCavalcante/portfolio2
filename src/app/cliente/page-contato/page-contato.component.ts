import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';


@Component({
  selector: 'app-page-contato',
  templateUrl: './page-contato.component.html',
  styleUrls: ['./page-contato.component.css']
})
export class PageContatoComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( "Contatos - Geovane Cavalcante" );
  }

}
