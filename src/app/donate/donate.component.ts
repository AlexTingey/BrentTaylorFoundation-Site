import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showButton(button : string){
    let Donation = document.getElementById(button);
    let Button = document.querySelector('.filter-active');

    Button.classList.remove("filter-active");
    let NewButton = document.querySelector("." + button);
    NewButton.classList.add("filter-active");
    let oldID = Button.classList[0];
    let oldDonation = document.getElementById(oldID);

    oldDonation.classList.remove("donate-box-enabled");
    oldDonation.classList.add("donate-box");

    Donation.classList.remove("donate-box");
    Donation.classList.add("donate-box-enabled");

}
}
