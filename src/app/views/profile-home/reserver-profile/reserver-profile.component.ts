import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { Observable, Subscription } from 'rxjs';
import { ServiceProvider } from 'src/app/shared/models/interfaces/sp.model';
import { LoggedUser } from 'src/app/shared/services/auth-services/auth.service';

@Component({
  selector: 'app-reserver-profile',
  templateUrl: './reserver-profile.component.html',
  styleUrls: ['./reserver-profile.component.scss']
})
export class ReserverProfileComponent implements OnInit {

  // public serviceProviders$!: Observable<any[]>;
  @Input() loggedInUser!: LoggedUser;

  providers!: ServiceProvider[];
  allProviders!: ServiceProvider[];

  providersSub!: Subscription;

  serviceProvidersCategories: string[] = ['Category One 1', 'Category 2', 'Category 3', 'Category 3', 'Category 3']
  constructor(private profileService: ProfileService){}

  ngOnInit(): void {
    // this.serviceProviders$ = this.profileService.getProviders()
    this.providersSub = this.profileService.getProviders().subscribe((res:any) => {
      this.providers = res.data
      this.allProviders = res.data

      console.log(" the providers ! ::", res.data)
    }, err => {
      console.log("Got an err fetching the providers ! ::", err)
    })
  }


  onSearchChange(text: any){
    console.log("The text in input", text)

    this.providers = this.allProviders.filter(el => el.name.includes(text))
  }

}
