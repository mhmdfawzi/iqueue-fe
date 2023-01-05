import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent implements OnInit{

  currentAccType: "basic" | "owner" | "admin" | "manager" = "owner"

  constructor(private cookieService: CookieService){}

  ngOnInit(): void {
      this.logger()
  }

  logger(){
    console.log("Cookie is :", this.cookieService.get('loggedUserType'))
  }

}
