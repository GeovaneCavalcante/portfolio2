import { appRoutesCore } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClienteModule } from './cliente/cliente.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import {  RouterModule } from '@angular/router';

/*Firebase*/
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ClienteModule,
    AdminModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutesCore,
      { enableTracing: true }
    ),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDOIkDASPcLk-uOzMAkStcnq6-WkVVn_e4',
      authDomain: 'portfolio-efd87.firebaseapp.com',
      databaseURL: 'https://portfolio-efd87.firebaseio.com',
      projectId: 'portfolio-efd87',
      storageBucket: 'portfolio-efd87.appspot.com',
      messagingSenderId: '410922141475'
    }),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
