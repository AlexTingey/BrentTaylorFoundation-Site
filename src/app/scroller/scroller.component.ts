import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.scss']
})
export class ScrollerComponent implements OnInit {

  private counter: Counter;
  imgURI: string;
  constructor() {
    this.counter = new Counter();
    this.imgURI = this.counter.getImges()[0] + ".jpg";
    this.counter.incrementCount();

  }

  ngOnInit() {
  }

  incrementImage(){
    this.counter.incrementCount();
    this.imgURI = this.counter.getImges()[this.counter.getCount() % (this.counter.getImges().length -1)] + ".jpg";
  }

}
