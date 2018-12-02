import { Component, OnInit } from '@angular/core';
import { Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit, AfterViewInit {

  @Input() background: string;
  @Input() current: boolean;
  @Input() url: string;

  // slideStyle: {background: string, visibility: string};


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  // ngDoCheck() {
  //   console.log('slide current slide', this.current);
  //   console.log('background:', this.background);
  //   console.log('background from obj:', this.slideStyle.background);
  //   console.log('visibility from obj:', this.slideStyle.visibility);

  //   if (this.background === this.slideStyle.background) {
  //     console.log('background equal');
  //   } else {
  //     console.log('background not equal');
  //   }

  // }

}
