import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { GeneralService } from '../generalService.service';
import { LoginForm, RegisterForm } from '../../models/interfaces/form.model';
import { environment } from 'src/environments/environment';
import * as moment from "moment";
import { CookieService } from 'ngx-cookie-service';
import { HttpResponse } from '@angular/common/http';

export interface ResponseLogin{
  success: boolean,
  message: string,
  data: LoggedUser
}

interface LoggedUser {
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

   constructor(
    private generalService: GeneralService,
    private cookieService: CookieService
  ) {}

  loginUser(loginForm: LoginForm): Observable<HttpResponse<ResponseLogin>>{
    return this.generalService.postAPIData<ResponseLogin>(`${environment.apiUrlAuth}/login`, loginForm)
  }

  handleSuccessfulLogin(user: LoggedUser) {
    this.loggedInUser.next(user);
    this.cookieService.set('tab', 'Hello World');

    // const expiresAt = moment().add(authResult.expiresIn,'second');

    // localStorage.setItem('id_token', authResult.idToken);
    // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  registerUser(formData: RegisterForm): Observable<HttpResponse<ResponseLogin>>{
    if(!formData.role){ // *This is to set role by default to basic if not passed already .
      formData.role = 'basic'
    }

    return this.generalService.postAPIData(`${environment.apiUrlAuth}/register`, formData)
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
