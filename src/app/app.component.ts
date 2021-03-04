import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  name = 'Martin';
  counterValue = 0;

  increment() {
    this.counterValue++;
  }
}

