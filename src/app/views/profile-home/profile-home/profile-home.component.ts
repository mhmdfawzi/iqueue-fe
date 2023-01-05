import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent implements OnInit{

  // currentAccType: "basic" | "owner" | "admin" | "manager" = "basic"
  currentAccType: string | null = "basic"

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    console.log("ROUTE IS", this.route.snapshot.paramMap.get("userType"))
    this.currentAccType = this.route.snapshot.paramMap.get("userType")
  }

  // logger(){
  //   console.log("Cookie is :", this.cookieService.get('loggedUserType'))
  // }

}
