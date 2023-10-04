import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-modo-nocturno',
  templateUrl: './modo-nocturno.component.html',
  styleUrls: ['./modo-nocturno.component.scss'],
})
export class ModoNocturnoComponent {
  Dark = 'Modo oscuro';
  enabled = false;

  toggleMode() {
    this.enabled = !this.enabled;
  }
}
