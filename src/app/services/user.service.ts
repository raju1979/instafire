import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  statusChangeSubject = new Subject<any>();

  constructor() { }

  set(userFromDatabase) {
    localStorage.setItem('user', JSON.stringify(userFromDatabase));
    this.statusChangeSubject.next(userFromDatabase);
  }

  getProfile() {
    const user = localStorage.getItem('user');
    return new Promise((resolve, reject) => {
      resolve(JSON.parse(user))
    })
  }

  getProfileObservable(): Observable<any> {
    return this.statusChangeSubject.asObservable();
  }

  destroy() {
    localStorage.removeItem('user');
    this.statusChangeSubject.next();
  }
}
