import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-politica',
  templateUrl: './politica.component.html',
  styleUrls: ['./politica.component.css']
})
export class PoliticaComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  public goBack() {
    this.location.back()
  }

}
