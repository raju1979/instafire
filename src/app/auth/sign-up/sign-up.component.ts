import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userData: any;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const fullname = form.value.fullname;
    const email = form.value.email;
    const password = form.value.password;

    let firestore = firebase.firestore();



    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userData) => {
        this.userData = userData.user;
        console.log(userData);
        return firebase.auth().currentUser.sendEmailVerification();
      }).then((data) => {
        console.log(this.userData.uid)
        let docRef = firestore.collection("users").doc(this.userData.uid);
        // return firebase.database().ref('users/'+ this.userData.uid).set({
        //   email: email,
        //   registrationDate: new Date().toString(),
        //   name: name
        // })
        return docRef.set({
          user: this.userData.uid,
          email: this.userData.email,
          registrationDate: new Date().toString(),
          name: fullname
        })
      })
      .then((data) => {
        this.toastr.success('Please check youe Email!', 'Success!');
        firebase.auth().signOut();
      })
      .catch((err) => {
        this.toastr.error(`Please try again! <br /> ${err.message}`, 'Error!');
        console.log(err);
      })
  }

}
