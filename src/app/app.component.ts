import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBanGmo48WhhggtlYI5z3f_FxGTq8Ee3s4',
      authDomain: 'ng-recipe-tutorial.firebaseapp.com'
    });
  }
}
