import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-slider',
  templateUrl: './content-slider.component.html',
  styleUrls: ['./content-slider.component.scss']
})
export class ContentSliderComponent implements OnInit {

  angularRecipeUrl = 'http://ng-recipe-book.s3-website.us-east-2.amazonaws.com/" target="blank" class="btn btn-default btn-lg';
  linkedInUrl = 'https://www.linkedin.com/in/brian-stanley/';
  gitHubUrl = 'https://github.com/bristanley';
  photoUrl = 'https://brianstanley.me/';

  constructor() { }

  ngOnInit() {
  }

  navigateTo(value: string) {
    switch (value) {
      case 'ngRecipe':
        window.open(this.angularRecipeUrl);
        break;
      case 'linkedIn':
        window.open(this.linkedInUrl);
        break;
      case 'gitHub':
        window.open(this.gitHubUrl);
        break;
      case 'photoSite':
        window.open(this.photoUrl);
        break;
    }
  }

}
