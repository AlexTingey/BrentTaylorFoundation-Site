import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { NewsComponent } from '../news/news.component';

const routes: Routes = [
  {
    path: 'news', component: NewsComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
