import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>();

  constructor(public auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout(); //clear all cookies and cache
    this.isLogout.emit();
  }

}
