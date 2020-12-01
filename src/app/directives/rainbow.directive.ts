import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  @HostBinding('style.color') color = 'red';
  @HostBinding('style.borderColor') bc = 'green';
  constructor() {}

  private getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  @HostListener('keyup') changeColor() {
    this.color = this.getRandomColor();
    this.bc = this.getRandomColor();
  }

}
