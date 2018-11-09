import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {

  currentSlide = 0;
  slides = [];

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

  slidesFetched(array) {
    console.log('fetched array:', array);
    this.slides = [...array];
  }

}
