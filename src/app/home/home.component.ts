import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { GetUserDataService } from '../services/get-user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>();

  constructor(public auth: AuthenticationService, public userData: GetUserDataService) { }

  ngOnInit(): void {
    this.userData.userEmail;
    console.log(this.userData.userEmail)
  }

  logout() {
    this.auth.logout(); //clear all cookies and cache
    this.isLogout.emit();
  }

}
