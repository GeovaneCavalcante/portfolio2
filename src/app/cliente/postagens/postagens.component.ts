import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';


@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css'],
})
export class PostagensComponent implements OnInit {


  constructor(private titleService: Title) {

  }

  ngOnInit() {
    this.titleService.setTitle( "Blog - Geovane Cavalcante" );
  }

}
