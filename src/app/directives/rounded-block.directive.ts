import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRoundedBlockDirectiveTs]',
})
export class RoundedBlockDirective {
  constructor(public ElementRef: ElementRef, public Renderer: Renderer2) {
    this.establecerColor();
    this.establecerBordes();
  }

  establecerColor() {
    this.Renderer.setStyle(
      this.ElementRef.nativeElement,
      'background-color',
      'purple'
    );
  }

  establecerBordes() {
    this.Renderer.setStyle(
      this.ElementRef.nativeElement,
      'border-radius',
      '30px'
    );
  }
}
