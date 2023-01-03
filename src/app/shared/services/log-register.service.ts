import { GeneralService } from './generalService.service';
import { Injectable } from "@angular/core";
import { LoginForm, RegisterForm } from "../models/interfaces/form.model";

@Injectable({
  providedIn: 'root'
})
export class LogRegisterService {

  url = "http://localhost:4200/api/auth/register"

  constructor(
    private generalService: GeneralService
  ) {}

  registerUser(formData: RegisterForm){
    return this.generalService.postAPIData(this.url, formData)
  }

  loginUser(loginForm: LoginForm){
    return this.generalService.postAPIData(this.url, loginForm)
  }

}
