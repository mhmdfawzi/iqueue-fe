import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { GeneralService } from '../generalService.service';
import { LoginForm, RegisterForm } from '../../models/interfaces/form.model';
import { environment } from 'src/environments/environment';
// import * as moment from "moment";
import { CookieService } from 'ngx-cookie-service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

export interface ResponseLogin{
  success: boolean,
  message: string,
  data: LoggedUser
}

export interface LoggedUser {
  username: string,
  role: string,
  id: string
}

@Injectable({
   providedIn: 'root'
})
export class AuthService {

  //  isUserLoggedIn: boolean = false;
  loggedInUser : BehaviorSubject<LoggedUser | null> = new BehaviorSubject<LoggedUser | null>(null);
  isLogged: boolean = false;

   constructor(
    private generalService: GeneralService,
    private router: Router
    // private cookieService: CookieService
  ) {}

  loginUser(loginForm: LoginForm): Observable<ResponseLogin>{
    return this.generalService.postAPIData<ResponseLogin>(`${environment.apiUrlAuth}/login`, loginForm)
  }

  // loginUser(loginForm: LoginForm){
  //   return this.generalService.postAPIData<ResponseLogin>(`${environment.apiUrlAuth}/login`, loginForm)
  // }

  handleSuccessfulLogin(user: LoggedUser) {
    user.role = "manager"
    this.loggedInUser.next(user);
    this.isLogged = true;

    this.router.navigate(['home'])
    // const expiresAt = moment().add(authResult.expiresIn,'second');

    // localStorage.setItem('id_token', authResult.idToken);
    // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  registerUser(formData: RegisterForm){
    if(!formData.role){ // *This is to set role by default to basic if not passed already .
      formData.role = 'basic'
    }

    return this.generalService.postAPIData(`${environment.apiUrlAuth}/register`, formData)
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }



  // isLoggedOut() {
  //   return !this.isLoggedIn();
  // }



  // getExpiration() {
  //   const expiration : any = localStorage.getItem("expires_at");
  //   const expiresAt = JSON.parse(expiration);
  //   return moment(expiresAt);
  // }


}
