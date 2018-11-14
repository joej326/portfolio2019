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
      image: 'url(../../assets/images/davis-thumbnail.jpg)',
      url: 'http://www.davis.josephmjoyce.me'
    },
    {
      image: 'url(../../assets/images/peets-thumbnail.jpg)',
      url: 'http://www.coffee.josephmjoyce.me'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  changeSlide(direction: 1 | -1) {
    if (this.currentSlide === 0 && direction === -1) {
      this.currentSlide = this.slides.length-1;
    } else if (this.currentSlide === this.slides.length-1 && direction === 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide += direction;
    }
    console.log('current slide:', this.currentSlide);
  }

}
