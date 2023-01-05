import { GeneralService } from './generalService.service';
import { Injectable } from "@angular/core";
import { LoginForm, RegisterForm } from "../models/interfaces/form.model";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogRegisterService {

  constructor(
    private generalService: GeneralService
  ) {}

  registerUser(formData: RegisterForm){
    return this.generalService.postAPIData(`${environment.apiUrl}/register`, formData)
  }

  loginUser(loginForm: LoginForm){
    return this.generalService.postAPIData(`${environment.apiUrl}/login`, loginForm)
  }

}
