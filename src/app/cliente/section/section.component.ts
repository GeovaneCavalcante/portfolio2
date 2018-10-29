import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private titleService: Title ) { }

  ngOnInit() {
  }

}
