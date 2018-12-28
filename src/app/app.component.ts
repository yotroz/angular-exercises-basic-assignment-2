import { Component } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  button = true;

  enableButton() {
    this.button = false;
  }

  eraseInput() {
    this.username = '';
  }
 }
