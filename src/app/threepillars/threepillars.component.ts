import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-threepillars',
  templateUrl: './threepillars.component.html',
  styleUrls: ['./threepillars.component.scss']
})
export class ThreepillarsComponent implements OnInit {
  engage: boolean;
  honor: boolean;
  train: boolean;
  constructor() {
    this.engage=this.train=this.honor=false;
   }

  ngOnInit() {
  }
  buttonClicked(input: string){
    switch(input){
      case "engage": {
        this.honor = false;
        this.train = false;
        this.engage = true;
        break;
      }
      case "honor": {
        this.engage = false;
        this.train = false;
        this.honor = true;
        break;
      }
      case "train": {
        this.engage = false;
        this.honor = false;
        this.train = true;
        break;
      }
    }
  }
}
