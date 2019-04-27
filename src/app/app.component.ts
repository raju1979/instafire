import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'instagram-like';

  ngOnInit() {
    var config = {
      apiKey: "AIzaSyB0Wo4GKeG4gTq6Hi-sDdBRwyJe6-fAJKc",
      authDomain: "raj-insta.firebaseapp.com",
      databaseURL: "https://raj-insta.firebaseio.com",
      projectId: "raj-insta",
      storageBucket: "raj-insta.appspot.com",
      messagingSenderId: "1032923676926"
    };
    firebase.initializeApp(config);
  }
}
