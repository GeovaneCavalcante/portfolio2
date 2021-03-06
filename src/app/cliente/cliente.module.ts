import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutesCore } from './../routes';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';


import { ClienteComponent } from './cliente.component';
import { SectionComponent } from './section/section.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { PageContatoComponent } from './page-contato/page-contato.component';
import { PostagensComponent } from './postagens/postagens.component';

import { ContatoService } from './contato/contato.service';

import {
  MzInputModule,
  MzValidationModule,
  MzSidenavModule,
  MzMediaModule,
  MzChipModule,
  MzCardModule
} from 'ngx-materialize';

import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutesCore,
      { enableTracing: true }
    ),
    ScrollToModule.forRoot(),
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    MzInputModule,
    MzSidenavModule,
    MzValidationModule,
    MzMediaModule,
    MzChipModule,
    MzCardModule
  ],
  declarations: [
    ClienteComponent,
    SectionComponent,
    PortifolioComponent,
    ContatoComponent,
    HomeAboutComponent,
    PageContatoComponent,
    PostagensComponent,
    FooterComponent
  ],
  exports: [
    ClienteComponent
  ],
  providers: [
    ContatoService
  ]
})
export class ClienteModule { }
