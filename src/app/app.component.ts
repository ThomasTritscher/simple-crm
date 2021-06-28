import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }
  title = 'simple-crm';

  openDialog() {
    this.dialog.open(LoginComponent);
  }
  openRegister() {
    this.dialog.open(RegisterComponent);
  }
}


