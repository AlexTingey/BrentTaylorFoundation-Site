import { Component, OnInit, NgModule, HostListener } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { NewsComponent } from '../news/news.component';

const routes: Routes = [
  {
    path: 'news', component: NewsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  screenWidth: any;
  screenHeight: any;

  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);
 }
  constructor() {
    this.onResize();
  }

  ngOnInit() {
  }

}
