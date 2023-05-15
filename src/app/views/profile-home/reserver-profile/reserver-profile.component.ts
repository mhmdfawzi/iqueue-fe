import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { Observable, Subscription } from 'rxjs';
import { ServiceProviderData } from 'src/app/shared/models/interfaces/sp.model';

@Component({
  selector: 'app-reserver-profile',
  templateUrl: './reserver-profile.component.html',
  styleUrls: ['./reserver-profile.component.scss']
})
export class ReserverProfileComponent implements OnInit {

  // public serviceProviders$!: Observable<any[]>;

  providers!: ServiceProviderData[];

  providersSub!: Subscription;

  serviceProvidersCategories: string[] = ['Category One 1', 'Category 2', 'Category 3', 'Category 3', 'Category 3']
  constructor(private profileService: ProfileService){}

  ngOnInit(): void {
    // this.serviceProviders$ = this.profileService.getProviders()
    this.providersSub = this.profileService.getProviders().subscribe(res => {
      this.providers = res.data
      console.log(" the providers ! ::", res.data)
    }, err => {
      console.log("Got an err fetching the providers ! ::", err)
    })
  }



}
