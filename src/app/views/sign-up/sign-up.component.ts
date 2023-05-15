import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterForm } from 'src/app/shared/models/interfaces/form.model';
import { LogRegisterService } from 'src/app/shared/services/log-register.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    router: Router,
    // cookieService: CookieService,
    private logServ: LogRegisterService
  ){}

  ngOnInit(): void {
    this.initKPIForm();
  }

  initKPIForm(){
    this.registerForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
  }

  signUp(){

    let formData: RegisterForm = {
      username: this.registerForm.get('username')?.value,
      password: this.registerForm.get('password')?.value,
      role: 'basic',
      queue: null,
      serviceProvider: null
    };

    console.log("The form data is :", formData);

    this.logServ.registerUser(formData).subscribe(res => {
      console.log("Register Sub Response: ", res)
    }, err => {
      console.log("Got an error on registration", err)
    })
  }
}
