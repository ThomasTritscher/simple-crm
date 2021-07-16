import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './services/authentication.service';
import { GetUserDataService } from './services/get-user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public dialog: MatDialog, public auth: AuthenticationService) { }
  title = 'simple-crm';

 
  ngOnInit() {
   
  }


  openDialog() {
    this.dialog.open(LoginComponent);
  }
  openRegister() {
    this.dialog.open(RegisterComponent);
  }
}


