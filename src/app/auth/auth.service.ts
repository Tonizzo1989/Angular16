import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedin = true;
  isAdmin = true;

  constructor() {}

  isAuthenticated() {
    return this.isLoggedin;
  }

  isRoleAdmin() {
    return this.isAdmin;
  }
}
