import { Component, Input, OnInit } from '@angular/core';
import { ProfileService, Provider, ProvidersResponse } from 'src/app/shared/services/profile.service';
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

  providers!: Provider[];
  allProviders!: Provider[];

  activeCategory: number = 0;

  providersSub!: Subscription;

  serviceProvidersCategories: Category[] = []

  constructor(private profileService: ProfileService, private categoriesService: CategoriesService){}

  ngOnInit(): void {
    // this.serviceProviders$ = this.profileService.getProviders()
    this.fetchServiceProviders()
    this.fetchCategories();
  }


  onSearchChange(text: any){
    this.providers = this.allProviders.filter(el => el.name.includes(text))
  }

  fetchCategories(){
    this.categoriesService.getCategories().subscribe( (res: CategoriesResponse) => {
      console.log("LOGGER getCategories!", res)
      this.serviceProvidersCategories = res.data
      this.serviceProvidersCategories.unshift({id: 0, name: "All"})
      this.activeCategory = 0;

    })
  }

  fetchServiceProviders(categoryID?: number){
    if(this.activeCategory === categoryID || categoryID === 0){
      this.activeCategory = 0;
      // categoryID = undefined
    }else{
      if(categoryID){
        this.activeCategory = categoryID;
      }
    }

    this.providersSub = this.profileService.getProviders(categoryID).subscribe((res:ProvidersResponse) => {

      console.log("LOGGER !", res)
      this.providers = res.data
      this.allProviders = res.data
    })
  }
}
