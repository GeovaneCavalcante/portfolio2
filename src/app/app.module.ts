import { appRoutesCore } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClienteModule } from './cliente/cliente.module';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import {  RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ClienteModule,
    AdminModule,
    RouterModule.forRoot(
      appRoutesCore,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
