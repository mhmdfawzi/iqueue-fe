import { Component, Input, OnInit } from '@angular/core';
import { ServiceProviderData } from '../../models/interfaces/sp.model';
import { ProfileService } from '../../services/profile.service';
import { Reserver, ReserveRequest } from './../../models/interfaces/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-provider-card',
  templateUrl: './service-provider-card.component.html',
  styleUrls: ['./service-provider-card.component.scss']
})
export class ServiceProviderCardComponent implements OnInit {
  @Input() serviceProviderData!: ServiceProviderData;
  @Input() thumbnailId!: number;

  constructor(private profileService: ProfileService, private router: Router){}

  ngOnInit(): void {
    console.log("Card data :", this.serviceProviderData)

    // let request: ReserveRequest = {reserver: "userA", queue: "63b1537f672eef7cfa846644"}
    // this.profileService.reserve(request)
  }

  reserve(id: string){
    let reservation = {
      reserver: "63a8a91fae39e4c865dda6ff",
      queue: id
    }

    this.profileService.reserve(reservation).subscribe(res => {
      console.log(" Response of reserving ::", res )
      this.router.navigate(["/in-queue"], {queryParams:{id: res.data._id}})
    })
  }

}
