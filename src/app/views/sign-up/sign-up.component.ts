import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterForm } from 'src/app/shared/models/interfaces/form.model';
import { AuthService } from 'src/app/shared/services/auth-services/auth.service';
import { matchPassword } from 'src/app/shared/services/validators/match-password.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.initKPIForm();
  }

  initKPIForm(){
    this.registerForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      confirmPassword: new FormControl("", Validators.required),
    }, {
      validators: matchPassword
    })
  }

  signUp(){
    let formData: RegisterForm = {
      username: this.registerForm.get('username')?.value,
      password: this.registerForm.get('password')?.value,
      queue: null,
      serviceProvider: null
    };

    this.authService.registerUser(formData).subscribe(res => {
      console.log("Register Sub Response: ", res)
    }, err => {
      console.log("Got an error on registration", err)
    })
  }
}
