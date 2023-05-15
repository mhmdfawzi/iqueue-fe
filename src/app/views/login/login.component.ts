import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { BaseFormComponent } from 'src/app/shared/models/components/base-form.component';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/shared/models/interfaces/form.model';
// import { CookieService } from 'ngx-cookie';
import { LogRegisterService } from 'src/app/shared/services/log-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { //extends BaseFormComponent

  // constructor(public router: Router, cookieService: CookieService, logRegisterService: LogRegisterService){
  //   super("login", "Fill in to login", "Login", router, cookieService, logRegisterService )
  // }

  loginForm!: FormGroup;


  constructor(
    router: Router,
    // cookieService: CookieService,
    private logServ: LogRegisterService
  ){}

  ngOnInit(): void {
    this.initKPIForm();
  }

  initKPIForm(){
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
  }

  signIn(){

    let formData: LoginForm = {username: this.loginForm.get('username')?.value, password: this.loginForm.get('password')?.value};

    console.log("The form data is :", formData);

    this.logServ.loginUser(formData).subscribe(res => {
      console.log("Login Sub Response: ", res)
    }, err => {
      console.log("Got an error on Login", err)
    })
  }
}
