import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OriginalSiteComponent } from './original-site/original-site.component';
import { HeaderComponent } from './header/header.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { NewsComponent } from './news/news.component';
import { DonateComponent } from './donate/donate.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SplashComponent } from './splash/splash.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ThreepillarsComponent } from './threepillars/threepillars.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { TrainComponent } from './train/train.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { LearnMOreComponent } from './learn-more/learn-more.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { HonorComponent } from './honor/honor.component';
import { EngageComponent } from './engage/engage.component';
import { OldCompetitionComponent } from './old-competition/old-competition.component';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    OriginalSiteComponent,
    HeaderComponent,
    ScrollerComponent,
    NewsComponent,
    DonateComponent,
    AboutComponent,
    ContactComponent,
    SplashComponent,
    HomeComponent,
    NavComponent,
    ThreepillarsComponent,
    TrainComponent,
    GetInvolvedComponent,
    LearnMOreComponent,
    PhotosComponent,
    VideosComponent,
    HonorComponent,
    EngageComponent,
    OldCompetitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
