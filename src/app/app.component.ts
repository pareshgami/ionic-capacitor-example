import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Native Keyboard', url: 'native-keyboard-example', icon: 'keypad' }
  ];
  constructor() {}
}
