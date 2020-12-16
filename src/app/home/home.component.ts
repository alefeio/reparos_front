import { Component, OnInit } from '@angular/core';
import { AppService, IMessage } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgLogo = './assets/img/logo.png'

  message: IMessage = {};

  constructor(private appService: AppService) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
      alert('Mensagem enviada com sucesso! Por favor, aguarde nosso contato. Obrigado!')
    }, error => {
      console.log('AppComponent Error', error);
      alert('Mensagem enviada com sucesso! Por favor, aguarde nosso contato. Obrigado!')
    })
  }

}
