import { Component, OnInit } from '@angular/core';
import { ScrollMasterService } from '../scroll-master.service';
import { ScrollMasterModel } from '../scroll-master-model';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {

  scrollInfoObj: ScrollMasterModel;
  aboutMe = `I was born and raised in the small and little-known town of Novato, California.

  At the age of 20  I accepted a job offer in Melbourne, Florida to work my first professional job
  as a Software Developer.

  The move was a big one, considering I was leaving behind my friends and family to reside in
  Florida where I didn’t know anyone. The journey has proven invaluable to me as it taught me how
  to live independently and meet interesting people in a world where people are becoming
  increasingly socially isolated.

  A passion of mine other than developing software is philosophy. More particularly existentialism.
  Contemplating how we can live meaningful lives makes me giddy simply thinking about it!

  My hobbies include:
  coding, reading, writing, longboarding, rollerblading, fitness, and teaching.`;

  constructor(private scrollMasterService: ScrollMasterService) { }

  ngOnInit() {
    this.scrollMasterService.scrollInfo.subscribe((data: ScrollMasterModel) => {
      this.scrollInfoObj = data;
    });
  }

}
