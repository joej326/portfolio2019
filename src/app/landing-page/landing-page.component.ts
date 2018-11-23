import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ScrollMasterService } from '../scroll-master.service';
import { ScrollMasterModel } from '../scroll-master-model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  scrollInfoObj: ScrollMasterModel;
  showWelcomePopup: boolean;

  constructor(private scrollMasterService: ScrollMasterService) { }

  ngOnInit() {
    this.scrollMasterService.scrollInfo.subscribe((data: ScrollMasterModel) => {
      this.scrollInfoObj = data;
    });
    setTimeout(() => {
      this.showWelcomePopup = true;
    }, 3000);
  }

  setScrollInfo(section: string) {
    console.log('set');
    this.scrollMasterService.getScrollInfo(section);
  }

}
