import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { BaseFormComponent } from 'src/app/shared/models/components/base-form.component';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/shared/models/interfaces/form.model';
import { AuthService, ResponseLogin } from 'src/app/shared/services/auth-services/auth.service';
// import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { //extends BaseFormComponent

  loginForm!: FormGroup;

  constructor(
    router: Router,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm(){
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
  }

  signIn(){

    let formData: LoginForm = {username: this.loginForm.get('username')?.value, password: this.loginForm.get('password')?.value};

    this.authService.loginUser(formData).subscribe((res: ResponseLogin) => {

      console.log("Login Sub Response: ", res)
      this.authService.handleSuccessfulLogin(res) // Sending the Response of JWT for parsing and emitting the user to the APP

    }, err => { // TODO Handle the FAIL to LOGIN scenario ! (Show err msg or toaster)
      console.log("Got an error on Login", err)
    })
  }
}
