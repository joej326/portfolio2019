import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  @Input() currentSlide: number;

  slides = [
    {
      image: 'url(../../assets/images/lounge-thumbnail.jpg)',
      url: 'http://www.lounge.josephmjoyce.me',
      description: `Finds low-key environments that are open late.

      • Uses the Google Maps API.
      • Written in the Angular 7 framework.
      • Languages: Javascript, Typescript, HTML5, CSS3.
      • User enters their desired location and submits it as a request.
      • Uses Angular’s http module to make RESTful service requests to the Google Maps API.
      • Uses Google Maps’ animations to animate the markers for the locations.
      • Uses Google Maps’ querying to yield location result from Google’s database to be displayed to the user.`
    },
    {
      image: 'url(../../assets/images/davis-thumbnail.jpg)',
      url: 'http://www.davis.josephmjoyce.me'
    },
    {
      image: 'url(../../assets/images/peets-thumbnail.jpg)',
      url: 'http://www.coffee.josephmjoyce.me'
    },
    {
      image: 'url(../../assets/images/first-game-thumbnail.jpg)',
      url: 'http://www.game.josephmjoyce.me'
    },
    {
      image: 'url(../../assets/images/longboards-thumnail.jpg)',
      url: 'http://www.longboards.josephmjoyce.me'
    },
    {
      image: 'url(../../assets/images/star-wars-thumbnail.jpg)',
      url: 'http://www.starwars.josephmjoyce.me'
    },
    {
      image: 'url(../../assets/images/exec-thumbnail.jpg)',
      url: 'http://www.exec.josephmjoyce.me'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  changeSlide(direction: number) {
    if (this.currentSlide === 0 && direction === -1) {
      this.currentSlide = this.slides.length - 1;
    } else if (this.currentSlide === this.slides.length - 1 && direction === 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide += direction;
    }
  }

}
