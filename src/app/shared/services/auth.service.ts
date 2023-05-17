import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { GeneralService } from './generalService.service';
import { LoginForm, RegisterForm } from '../models/interfaces/form.model';
import { environment } from 'src/environments/environment';
import * as moment from "moment";

@Injectable({
   providedIn: 'root'
})
export class AuthService {

  //  isUserLoggedIn: boolean = false;

   constructor(
    private generalService: GeneralService
  ) {}

  loginUser(loginForm: LoginForm){
    return this.generalService.postAPIData(`${environment.apiUrl}/login`, loginForm)
  }

  setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  registerUser(formData: RegisterForm){
    return this.generalService.postAPIData(`${environment.apiUrl}/register`, formData)
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }



  getExpiration() {
    const expiration : any = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }


}
