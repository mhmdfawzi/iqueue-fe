import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, LoggedUser } from 'src/app/shared/services/auth-services/auth.service';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent implements OnInit{

  // currentAccType: "basic" | "owner" | "admin" | "manager" = "basic"
  // currentAccType: string | null = "basic"
  loggedInUser! : LoggedUser;

  constructor(private route: ActivatedRoute, private authService: AuthService){}

  ngOnInit(): void {
    // console.log("ROUTE IS", this.route.snapshot.paramMap.get("userType"))
    // this.currentAccType = this.route.snapshot.paramMap.get("userType")

    this.authService.loggedInUser.subscribe(res => {
      this.loggedInUser = res!
      // this.currentAccType = res!.role
    })
  }

  // logger(){
  //   console.log("Cookie is :", this.cookieService.get('loggedUserType'))
  // }

}
