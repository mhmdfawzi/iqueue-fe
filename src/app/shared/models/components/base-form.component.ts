import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/shared/models/interfaces/form.model';
import { CookieService } from 'ngx-cookie';
import { LogRegisterService } from '../../services/log-register.service';
import { RegisterForm } from './../interfaces/form.model';

@Component({
  selector: 'app-login',
  template: `
  <div class="main padding-for-nav">
  <app-log-form [introText]="introText" [btnActionText]="actionText" (formSubmission)="submitData($event)"></app-log-form>
</div>
`,
  styles: []
})
export class BaseFormComponent {

  formState: "register" | "login";

  introText: string;
  actionText: string;
  angRouter: Router;
  cookieServ: CookieService;
  logServ: LogRegisterService;

  constructor(
    @Inject(String) public state: "register" | "login",
    @Inject(String) public introTxt: string,
    @Inject(String) public actionTxt: string,
    router: Router,
    cookieService: CookieService,
    logRegisterService: LogRegisterService
    ){
    this.formState = state
    this.introText = introTxt
    this.actionText = actionTxt
    this.angRouter = router
    this.cookieServ = cookieService
    this.logServ = logRegisterService
  }

  submitData(formData: LoginForm){
    console.log(`Da form base >> ${this.formState}`, formData)

    // After getting data from API
    let accountType: string = "reserver"
    this.cookieServ.put('loggedUserType', accountType)

    if(this.formState === "login"){
      this.logServ.loginUser(formData).subscribe(res => {
        console.log("Login Sub Response: ", res)
      })
    }else{
      let regForm: RegisterForm = {...formData, role: "basic"}
      this.logServ.registerUser(regForm).subscribe( res => {
        console.log("Register Sub response :", res)
      })
    }

    this.angRouter.navigate(['/reserve'])
  }
}
