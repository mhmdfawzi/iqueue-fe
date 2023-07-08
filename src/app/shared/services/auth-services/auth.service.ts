import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { GeneralService } from '../generalService.service';
import { LoginForm, RegisterForm } from '../../models/interfaces/form.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { SystemUser } from '../../models/classes/user-model';
import { User } from '../../models/interfaces/user.model';


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

export interface RouteItem{
  caption: string,
  route: string,
  icon:string,
  users: string[]
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

  getUserMenuItems(): RouteItem[]{

    // Icons should follow the namings of mat-icon library to show an actual icon.
    const routes : RouteItem[] = [
      {caption: 'Home', route: 'home', icon: 'home', users : ["manager", "owner", "basic"]},
      {caption: 'Current Queue', route: 'in-queue', icon: 'queue_play_next', users : ["basic"]},
      {caption: 'My Queue', route: 'in-queue', icon: 'queue_play_next', users : ["manager"]},
      {caption: 'Settings', route: 'settings', icon: 'settings', users : ["manager", "owner", "basic"]},
      {caption: 'Log out', route: 'login', icon: 'remove_circle_outline', users : ["manager", "owner", "basic"]},
    ]

    let currentUserRoutes: RouteItem[] = [];

    for(let route of routes){
      if(route.users.includes(this.loggedInUser!.role)){
        currentUserRoutes.push(route)
      }
    }

    return currentUserRoutes;
    // this.loggedInUser?.role
  }

  // getExpiration() {
  //   const expiration : any = localStorage.getItem("expires_at");
  //   const expiresAt = JSON.parse(expiration);
  //   return moment(expiresAt);
  // }


}
