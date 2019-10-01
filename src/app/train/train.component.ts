import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {
  title = 'brent-taylor';
  boxes : HTMLCollectionOf<Element>;
  moreInfoClicked: boolean;
  constructor() { }

  ngOnInit() {
  }
  displayMoreText(){

    this.moreInfoClicked = !this.moreInfoClicked;
    let OurMission = document.getElementById("read-more");
    if(this.moreInfoClicked){
          OurMission.innerHTML = "<p>Major Brent Taylor was on his second term as the mayor of North Ogden when he took an unprecedented year of absence to serve his fourth deployment in Afghanistan. In November of 2018, Major Taylor was killed in an insider attack in Kabul. This made him the first sitting U.S. politician to be killed in action since the Civil War. He is survived by his wife, Jennie Taylor, and seven children. To Brent, God, family and country were everything and had become his mantra that steered his life.</p><p>Brent Taylor was born on July 6, 1976 in Ogden, Utah. From the start, he has always been a leader in his endeavors. He graduated from Chandler High School, where he was elected as student body president and earned an eagle scout award. Strongly rooted in his faith, Brent served a mission for the Church of Jesus Christ of Latter-day Saints from 1998-2000 after his graduation. Brent was called upon to serve in the Brazil, Maceio Mission.</p><p> Prompted by the terrorist attack on September 11, 2001, Brent enlisted in the military to serve his country. Led by his courage, he would go on to be awarded a Purple Heart Medal and a Bronze Sta Medal during his service in Operation Iraqi Freedom. Major. He was commissioned as an officer in 2006. Brent had just surpassed the 15-year mark of his military career before he was killed. </p><p>Brent earned his bachelor’s degree from Brigham Young University in political science in 2006. Brent would later go to the University of Utah for a Master of Public Administration degree in 2013. He was on track to graduate with doctorate’s degree before he was killed in action. In May 2019, the University of Utah awarded Brent a posthumous PhD.</p><p> Major Taylor deeply cared about his community and wanted to make an impact. This led him to join North Ogden’s city council in 2009. Four years later, Brent would go on to become the mayor and re-elected in 2017. He was trusted by members of his community and listened to the voices of his constituents. Brent then announced his deployment to Afghanistan. He said it was his duty to serve his country and help train Afghan forces.</p>"

    }
    else{
      OurMission.innerHTML = "";
    }
  }
}
