import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators'

export interface IMessage {
  nome?: string,
  email?: string,
  telefone?: string,
  ingressos?: string,
  informacao?: string
}

@Injectable()
export class AppService {
  private emailUrl = '/assets/email.php';

  constructor(private http: HttpClient) {

  }

  sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message)
      .pipe(map(response => {
        console.log('Sending email was successfull', response);
        return response;
      }))
  }
}