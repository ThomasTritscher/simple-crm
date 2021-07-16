import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule, TooltipComponent } from '@angular/material/tooltip';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatMenuModule } from '@angular/material/menu';
import { DialogEditAddressComponent } from './dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { TasksComponent } from './tasks/tasks.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ActivityComponent } from './activity/activity.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { ContractsComponent } from './contracts/contracts.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { SideNavRightComponent } from './side-nav-right/side-nav-right.component';
import { DashboardUserViewComponent } from './dashboard-user-view/dashboard-user-view.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    DialogAddUserComponent,
    UserDetailComponent,
    DialogEditAddressComponent,
    DialogEditUserComponent,
    TasksComponent,
    MessagesComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ActivityComponent,
    CashFlowComponent,
    ContractsComponent,
    SideNavRightComponent,
    DashboardUserViewComponent,
 


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatProgressBarModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatChipsModule




  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
