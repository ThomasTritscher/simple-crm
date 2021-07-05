import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GetUserDataService } from './services/get-user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
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


