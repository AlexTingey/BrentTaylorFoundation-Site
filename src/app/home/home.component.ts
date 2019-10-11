import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  innerWidth: any;
  innerHeight: any;
  windowResized(event?) {
    this.innerWidth = window.innerHeight;
    this.innerHeight = window.innerWidth;
    console.log(this.innerWidth, this.innerHeight);
 }
  constructor() {
    this.windowResized();

   }

  ngOnInit() {
  }

}
