import { Component, AfterViewInit } from '@angular/core';

declare var Prism;

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css'],
})
export class PostagensComponent implements AfterViewInit {


  myCode: any;

  constructor() { }

  ngAfterViewInit() {
    const code = 'var data = 1;';
    this.myCode = Prism.highlight(code, Prism.languages.javascript);
  }

}
