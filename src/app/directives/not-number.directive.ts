import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appNotNumber]',
})
export class NotNumberDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keyup') onKeyDown() {
    let chaine = this.el.nativeElement.value;
    console.log(chaine.charAt(chaine.length - 1));
    if (
      chaine.charAt(chaine.length - 1) >= '0' &&
      chaine.charAt(chaine.length - 1) <= '9'
    ) {
      this.el.nativeElement.value = chaine.slice(0, chaine.length - 1);
    }
  }
}
