import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn: boolean = false;

  constructor(public firebaseAuth: AngularFireAuth) { }

  async signin(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        sessionStorage.setItem('user', JSON.stringify(res.user))
      })
  }
  async register(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        sessionStorage.setItem('user', JSON.stringify(res.user))
      })
  }
  logout() {
    this.firebaseAuth.signOut();
    sessionStorage.removeItem('user');
    this.isLoggedIn = false;
  }

}
