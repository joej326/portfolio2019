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
      url: 'http://www.lounge.josephmjoyce.me'
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
