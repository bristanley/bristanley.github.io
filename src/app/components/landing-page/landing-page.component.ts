import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  photoWebSiteUrl = 'http://brianstanley.myportfolio.com';

  constructor() { }

  ngOnInit() {
  }

  goToPhoto() {
    window.open(this.photoWebSiteUrl);
  }

}
