import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { Observable, Subscription } from 'rxjs';
import { ServiceProvider } from 'src/app/shared/models/interfaces/sp.model';
import { LoggedUser } from 'src/app/shared/services/auth-services/auth.service';
import { CategoriesResponse, CategoriesService } from 'src/app/shared/services/categories.service';
import { Category } from 'src/app/shared/models/interfaces/categories.model';

@Component({
  selector: 'app-reserver-profile',
  templateUrl: './reserver-profile.component.html',
  styleUrls: ['./reserver-profile.component.scss']
})
export class ReserverProfileComponent implements OnInit {

  // public serviceProviders$!: Observable<any[]>;
  @Input({required: true}) loggedInUser!: LoggedUser | null;

  providers!: ServiceProvider[];
  allProviders!: ServiceProvider[];

  activeCategory!: string | undefined;

  providersSub!: Subscription;

  serviceProvidersCategories: Category[] = []

  constructor(private profileService: ProfileService, private categoriesService: CategoriesService){}

  ngOnInit(): void {
    // this.serviceProviders$ = this.profileService.getProviders()
    this.fetchServiceProviders()
    this.fetchCategories();
  }


  onSearchChange(text: any){
    console.log("The text in input", text)

    this.providers = this.allProviders.filter(el => el.name.includes(text))
  }

  fetchCategories(){
    this.categoriesService.getCategories().subscribe( (res: CategoriesResponse) => {
      this.serviceProvidersCategories = res.data
    })
  }

  fetchServiceProviders(categoryID?: string){

    if(this.activeCategory === categoryID){
      this.activeCategory = undefined;
      categoryID = undefined
    }else{
      this.activeCategory = categoryID;
    }

    this.providersSub = this.profileService.getProviders(categoryID).subscribe((res:any) => {

      console.log("The res", res)

      this.providers = res.data
      this.allProviders = res.data

      console.log(" the providers ! ::", res.data)
    }, err => {
      console.log("Got an err fetching the providers ! ::", err)
    })
  }
}
