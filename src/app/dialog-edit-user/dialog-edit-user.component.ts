import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  loading = false;
  user: User = new User();
  userId!: string;


  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser() {
    if (this.userId) {
      this.loading = true;
      this.firestore
        .collection('users')
        .doc(this.userId)
        .update(this.user.toJSON())
        .then(() => {
          this.loading = false;
          this.dialogRef.close();
        });
    }else{
      //Throw Error
    }

  }

}
