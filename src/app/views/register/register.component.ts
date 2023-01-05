import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { BaseFormComponent } from 'src/app/shared/models/components/base-form.component';
import { LogRegisterService } from 'src/app/shared/services/log-register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseFormComponent {

    constructor(public router: Router, cookieService: CookieService, logRegisterService: LogRegisterService){
    super("register", "Fill in to register", "Register", router, cookieService, logRegisterService)
  }

}
