import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  LoggedIn = false;

  login() {
    this.LoggedIn = true;
  }

  logout() {
    this.LoggedIn = false;
  }

  isAuthenticated() {
    return this.LoggedIn;
  }

  constructor() {}
}
