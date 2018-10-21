import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL = 'https://us-central1-lucena-maps-1529075740558.cloudfunctions.net/envioemail';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  headers: any;

  constructor(private http: HttpClient) { }

  enviarEmail(dados) {

    this.headers  = new HttpHeaders();
    this.headers.set('content-type', 'application/json');

    return this.http.post(URL, dados, { headers: this.headers })
    .subscribe(
        data => {
            console.log('Email enviado com sucesso! ', data);
        },
        error => {
            console.log('Error', error);
        }
    );
  }


}
