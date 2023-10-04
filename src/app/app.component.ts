import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Languages Academy';

  onClick(ev: any): void {
    console.log('Click', ev);
  }
}
