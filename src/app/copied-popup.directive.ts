import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCopiedPopup]'
})
export class CopiedPopupDirective implements OnInit {

  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit() {
    // let elem = this.element;
    // this.renderer.listen(elem, 'click', () => {
    //   this.renderer.addClass(elem, 'copy-class');

    //   setTimeout(() => {
    //     this.renderer.removeClass(elem, 'copy-class');
    //   }, 2000);
    // });
  }

}
