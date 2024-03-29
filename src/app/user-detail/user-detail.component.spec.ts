import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore} from '@angular/fire/firestore';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

import { UserDetailComponent } from './user-detail.component';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), MatDialogModule,AngularFireModule.initializeApp(environment.firebase),MatMenuModule,
    ],
      declarations: [ UserDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
