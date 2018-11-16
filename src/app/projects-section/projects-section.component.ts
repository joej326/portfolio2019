import { Component, OnInit } from '@angular/core';

import { ScrollMasterModel } from '../scroll-master-model';
import { ScrollMasterService } from '../scroll-master.service';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {

  currentSlide = 0;
  slides = [];
  scrollInfoObj: ScrollMasterModel;

  constructor(private scrollMasterService: ScrollMasterService) { }

  ngOnInit() {
    this.scrollMasterService.scrollInfo.subscribe((data: ScrollMasterModel) => {
      this.scrollInfoObj = data;
      console.log('proj', this.scrollInfoObj);
    });
  }



}
