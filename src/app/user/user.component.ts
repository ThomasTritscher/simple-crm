import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  user: User = new User(); // var : data typ = created instance / similar to empty Json
  


  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}
