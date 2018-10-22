import { Component, OnInit } from '@angular/core';
import { MzMediaService } from 'ngx-materialize';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public smallResolution: Observable<boolean>;

  constructor(
    public mediaService: MzMediaService
  ) {
    this.smallResolution = this.mediaService.isActive('lt-l');
  }

  ngOnInit() {
  }

}
