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

  At this position, I worked as a front-end Angular 2 developer for two years. It was a contracting
  position for the US government, and my primary responsibility was building features as they
  were requested from the higher-ups as well as fixing defects. My proudest accomplishment at
  that position is becoming the go-to guy in the office for writing unit tests in the Jasmine framework.

  I’m currently working as a full-stack developer for Veristream in Orlando, Florida.
  I work with a small team which has helped me learn how to communicate effectively
  and take on a lot of responsibility.

  Learning and teaching are two of my most favorite things in the world and I hope we can learn from eachother!`;

  constructor(private scrollMasterService: ScrollMasterService) { }

  ngOnInit() {
    this.scrollMasterService.scrollInfo.subscribe((data: ScrollMasterModel) => {
      this.scrollInfoObj = data;
    });
  }

}
