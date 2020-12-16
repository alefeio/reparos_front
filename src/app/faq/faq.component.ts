import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

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
