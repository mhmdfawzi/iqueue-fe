import { Component } from '@angular/core';
import { BaseFormComponent } from 'src/app/shared/models/components/base-form.component';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { LogRegisterService } from 'src/app/shared/services/log-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseFormComponent {

  constructor(public router: Router, cookieService: CookieService, logRegisterService: LogRegisterService){
    super("login", "Fill in to login", "Login", router, cookieService, logRegisterService )
  }

}
