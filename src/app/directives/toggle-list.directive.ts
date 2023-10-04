import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appToggleList]',
})
export class ToggleListDirective {
  @Input('appToggleList') set toggleList(value: boolean) {
    if (value) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
  }

  constructor(public el: ElementRef, public renderer: Renderer2) {}
}
