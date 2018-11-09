import { Component, OnInit, EventEmitter, AfterViewInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() currentSlide: number;

  slides = ['red', 'blue', 'green'];
  @Output() emitSlides = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.emitSlides.emit(this.slides);  
  }

}
