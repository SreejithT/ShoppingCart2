import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }
  logout(){
    localStorage.setItem("isLoggedIn","false")
    localStorage.removeItem("username")
  }
}

