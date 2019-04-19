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
  aboutMe = `I was born and raised in California.

  At the age of 20  I received a job offer in Melbourne, FL to work my first professional job
  as a Software Developer.

  The move was a big one, considering I was leaving behind my friends and family to reside in
  Florida where I didn’t know anyone. The journey has proved invaluable to me as it has taught
  me how to live independently and make meaningful connections in a world where people are
  becoming increasingly socially isolated.

  A passion of mine besides developing software is philosophy, more particularly existentialism.
  Conversing about how one should live a meaningful life makes me giddy simply at the thought of it!

  My hobbies include:
  coding, reading, writing, longboarding, rollerblading, going to the gym, and teaching.`;

  constructor(private scrollMasterService: ScrollMasterService) { }

  ngOnInit() {
    this.scrollMasterService.scrollInfo.subscribe((data: ScrollMasterModel) => {
      this.scrollInfoObj = data;
    });
  }

}
