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
  newInnerWidth: any;
  newInnerHeight: any;
  mobile: boolean;
  constructor() {
    this.newInnerWidth = window.innerHeight;
    this.newInnerHeight = window.innerWidth;
    this.mobile = false;
    if(this.newInnerWidth <= 768){
      this.mobile = true;
    }
  }

  ngOnInit() {
  }

}
