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

  constructor(private scrollMasterService: ScrollMasterService) { }

  ngOnInit() {
    this.scrollMasterService.scrollInfo.subscribe((data: ScrollMasterModel) => {
      this.scrollInfoObj = data;
    });
  }

}
