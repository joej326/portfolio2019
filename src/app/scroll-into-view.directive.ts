import { Directive, ElementRef, AfterViewInit, Renderer2, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appScrollIntoView]'
})
export class ScrollIntoViewDirective implements AfterContentInit {

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  ngAfterContentInit() {
    this.elem.nativeElement.scrollIntoView({behavior: 'smooth'});
    console.log('ran');
  }

}
