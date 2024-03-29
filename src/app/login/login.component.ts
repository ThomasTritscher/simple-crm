import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  isSignedIn: boolean = false;
  


  constructor(public auth: AuthenticationService, public dialog: MatDialog) { }

  ngOnInit(): void {

    if (sessionStorage.getItem('user') !== null) //check LS for user or not
      this.isSignedIn = true
    else
      this.isSignedIn = false
  }

  async onRegister(email: string, password: string) {
    await this.auth.register(email, password)
    if (this.auth.isLoggedIn)
      this.isSignedIn = true;
  }
  async onSignin(email: string, password: string) {
    await this.auth.signin(email, password)
    if (this.auth.isLoggedIn)
      this.isSignedIn = true;
  }

  handleLogout() {
    this.isSignedIn = false

  }

  openRegister() {
    this.dialog.open(RegisterComponent);
  }



}
