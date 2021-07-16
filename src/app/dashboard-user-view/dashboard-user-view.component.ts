import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { GetUserDataService } from '../services/get-user-data.service';

@Component({
  selector: 'app-dashboard-user-view',
  templateUrl: './dashboard-user-view.component.html',
  styleUrls: ['./dashboard-user-view.component.scss']
})
export class DashboardUserViewComponent implements OnInit {


  constructor(private route: ActivatedRoute,
    private firestore: AngularFirestore,
    public dialog: MatDialog, public userData: GetUserDataService) { }

    ngOnInit(): void {
      this.userData.userEmail;
    }
    

}
