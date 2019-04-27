import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { FireService } from 'src/app/services/fire.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private fireService:FireService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userData) => {
        console.log(userData);
        if(userData.user.emailVerified) {
          console.log(userData);
          return this.fireService.getUserFromDatabase(userData.user.uid)
        } else {
          firebase.auth().signOut();
          throw new Error("Email not verified");
        }
      }).then((doc: any) => {
        if(doc.exists) {
          console.log(doc.data());
          this.userService.set(doc.data());
          this.router.navigate(['/']);
        } else {
          throw new Error("User does not exists");
        }
      })
      .catch((err) => {
        this.toastr.error(`Please try again, ${err}`, 'Error!');
      })
  }

}
