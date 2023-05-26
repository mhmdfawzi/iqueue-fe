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
import { SystemUser } from '../../models/classes/user-model';
import { User } from '../../models/interfaces/user.model';
import { ServiceProvider } from 'src/app/shared/models/interfaces/sp.model';

// export interface ResponseLogin{
//   success: boolean,
//   message: string,
//   data: LoggedUser
// }

export interface ResponseLogin{
  token: string
}

export interface LoggedUser {
  username: string,
  role: string,
  id: string,
  iat: number,
  exp: number
}

@Injectable({
   providedIn: 'root'
})
export class AuthService {

  // loggedInUser : BehaviorSubject<LoggedUser | null> = new BehaviorSubject<LoggedUser | null>(null);
  loggedInUser!: User | null;

  isLogged: boolean = false;

   constructor(
    private generalService: GeneralService,
    private router: Router
  ) {}

  loginUser(loginForm: LoginForm): Observable<ResponseLogin>{
    return this.generalService.postAPIData<ResponseLogin>(`${environment.apiUrlAuth}/login`, loginForm)
  }

  handleSuccessfulLogin(response: ResponseLogin) {
    localStorage.setItem('taburJWTToken', response.token)

    // let tempUser = {
    //   username: "seif",
    //   role: "owner",
    //   id: "645d063551d62d55de14ab2e",
    //   iat: 1684796324,
    //   exp: 1684882724
    // }

    // user.role = "manager"

    // this.loggedInUser.next(new SystemUser(response.token)); // the Behavior Subject will emit the returned user of JWT from the class
    this.loggedInUser = new SystemUser(response.token); // the Behavior Subject will emit the returned user of JWT from the class
    // this.loggedInUser.next(tempUser); // the Behavior Subject will emit the returned user of JWT from the class
    this.isLogged = true;

    this.router.navigate(['home'])
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


  // getExpiration() {
  //   const expiration : any = localStorage.getItem("expires_at");
  //   const expiresAt = JSON.parse(expiration);
  //   return moment(expiresAt);
  // }


}
