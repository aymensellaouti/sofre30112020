import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() in = 'green';
  @HostBinding('style.backgroundColor') bgc = 'red';
  constructor(private el: ElementRef) {
    console.log(el);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
    this.el.nativeElement.innerHTML = 'in';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = 'red';
  }
}
