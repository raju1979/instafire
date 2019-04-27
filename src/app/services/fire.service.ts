import { Injectable } from '@angular/core';

import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class FireService {


  constructor() { }

  getUserFromDatabase(uid) {
    let firestore = firebase.firestore();
    const docRef = firestore.collection("users").doc(uid);
    return docRef.get();

  }
}
