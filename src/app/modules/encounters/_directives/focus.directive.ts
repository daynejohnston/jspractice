import { Directive, ElementRef, Renderer, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})

export class FocusDirective implements AfterViewInit {

  constructor(private el: ElementRef
              , private rd: Renderer) { }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }

}
