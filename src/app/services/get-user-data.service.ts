import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserDataService {

  currentUser: any = JSON.parse(sessionStorage.getItem('user') || '{}');
  userEmail = this.currentUser['email'];

  constructor() { }

}
