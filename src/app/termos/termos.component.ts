import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-termos',
  templateUrl: './termos.component.html',
  styleUrls: ['./termos.component.css']
})
export class TermosComponent implements OnInit {

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
