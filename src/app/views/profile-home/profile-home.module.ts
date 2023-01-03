import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileHomeRoutingModule } from './profile-home-routing.module';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { ReserverProfileComponent } from './reserver-profile/reserver-profile.component';
import { OwnerProfileComponent } from './owner-profile/owner-profile.component';
import { ManagerProfileComponent } from './manager-profile/manager-profile.component';


@NgModule({
  declarations: [
    ProfileHomeComponent,
    ReserverProfileComponent,
    OwnerProfileComponent,
    ManagerProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileHomeRoutingModule
  ]
})
export class ProfileHomeModule { }
