import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input()
  title: string = '';

  @Input()
  btn = 'Agendar clase';

  @Input()
  imgSrc: string = 'Courses';

  @Output()
  clickEv = new EventEmitter();
  @Output() clickEv2: EventEmitter<void> = new EventEmitter<void>();

  isHovered: boolean = false;

  onMouseEnter(): void {
    this.isHovered = true;
  }

  onMouseLeave(): void {
    this.isHovered = false;
  }
}
