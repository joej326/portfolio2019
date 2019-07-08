import { ScrollMasterService } from '../scroll-master.service';
import { ScrollMasterModel } from '../scroll-master-model';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {

  scrollInfoObj: ScrollMasterModel;

  phoneCopied: boolean;
  emailCopied: boolean;

  constructor(@Inject( DOCUMENT ) private document: Document, private scrollMasterService: ScrollMasterService) {}

  ngOnInit() {
    this.scrollMasterService.scrollInfo.subscribe((data: ScrollMasterModel) => {
      this.scrollInfoObj = data;
    });
  }

  copyToClipboard(elem): void {
    this.phoneCopied = false;
    this.emailCopied = false;
    const textArea = this.document.createElement('textarea');
    textArea.value = (elem === 'phone') ? '415-686-5329' : 'joej326@gmail.com';
    this.document.body.appendChild(textArea);
    textArea.select();
    this.document.execCommand('copy');
    this.document.body.removeChild(textArea);

    (elem === 'phone') ? this.phoneCopied = true : this.emailCopied = true;

    setTimeout(() => {
      this.phoneCopied = false;
      this.emailCopied = false;
    }, 2000);
  }

}
