import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isSignedIn: boolean = false;
 

  constructor(public auth: AuthenticationService) { }

  ngOnInit(): void {

  }

  

  async onRegister(email: string, password: string) {
    await this.auth.register(email, password)
    if (this.auth.isLoggedIn)
      this.isSignedIn = true;
  }
  handleLogout() {
    this.isSignedIn = false
  }
}
