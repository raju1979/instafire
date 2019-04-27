import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { UserService } from 'src/app/services/user.service';
import { Routes, Router } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  name: string;
  uid: string;
  email: string;

  profileSubscription: Subscription;

  constructor(
    private userService: UserService,
    private router: Router
  ) { 
    this.profileSubscription = this.userService.getProfileObservable()
                                  .subscribe(user => {
                                    console.log('Status Changed', user);
                                    this.name = user.name;
                                    this.email = user.email;
                                    this.uid = user.uid;
                                  })
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(userData => {
      console.log(userData)
      if(userData && userData.emailVerified) {
        this.isLoggedIn = true;       
        
      } else {
        this.isLoggedIn = false;
        firebase.auth().signOut();
      }
    })
  }

  onLogout() {
    firebase.auth().signOut()
      .then(() => {
        this.userService.destroy();
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
      })
  }

}
