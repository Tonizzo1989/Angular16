import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight = '';
  @Input() appHighlight2 = '';

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changingColor(this.appHighlight || this.appHighlight2 || 'grey');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'brown';
  }

  changingColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
