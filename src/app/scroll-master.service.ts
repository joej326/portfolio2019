import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ScrollMasterModel } from './scroll-master-model';

@Injectable({
  providedIn: 'root'
})
export class ScrollMasterService {

  scrollInfo = new Subject<ScrollMasterModel>();

  scrollInfoObj = new ScrollMasterModel();

  constructor() { }

  getScrollInfo(section: string): void {
    for (const key in this.scrollInfoObj) {
      if (key === section) {
        console.log('match!');
        this.scrollInfoObj[key] = true;
        setTimeout(() => {
          this.scrollInfoObj[key] = false;
        }, 2000);
      } else {
        this.scrollInfoObj[key] = false;
      }
    }
    this.scrollInfo.next(this.scrollInfoObj);
    console.log('sent');
    console.log(this.scrollInfoObj);
  }
}
