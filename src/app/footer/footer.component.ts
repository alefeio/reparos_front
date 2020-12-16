import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public dataAtual = new Date

  imgLogo = './assets/img/logo.png'
  
  constructor() { }


  ngOnInit() {
  }

}
