import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'Portfólio - Geovane Cavalcante' );
    this.carrusel();
  }


  carrusel() {
    $('.carousel').carousel(  {
      dist: 0,
      padding: 0,
      fullWidth: true,
      indicators: true,
      duration: 100,
    }
    );

    autoplay();
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }
  }

}
