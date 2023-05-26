// Modules >>
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from '@angular/material/select';

// Components >>
import { ServiceProviderCardComponent } from './components/service-provider-card/service-provider-card.component';
import { InQueueComponent } from './components/in-queue/in-queue.component';
import { QueueCardComponent } from './components/queue-card/queue-card.component';
import { AdminProfileComponent } from '../views/profile-home/admin-profile/admin-profile.component';
import { ManagerProfileComponent } from '../views/profile-home/manager-profile/manager-profile.component';
import { OwnerProfileComponent } from '../views/profile-home/owner-profile/owner-profile.component';
import { ReserverProfileComponent } from '../views/profile-home/reserver-profile/reserver-profile.component';
import { InputComponent } from './components/input/input.component';
import { WideButtonComponent } from './components/wide-button/wide-button.component';
import { CategoryBadgeComponent } from './components/category-badge/category-badge.component';
import { SmallButtonComponent } from './components/small-button/small-button.component';
import { CircleButtonComponent } from './components/circle-button/circle-button.component';
import { QueueDetailsComponent } from './components/queue-details/queue-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule
  ],

  declarations: [
    ServiceProviderCardComponent,
    InQueueComponent,
    QueueCardComponent,
    ReserverProfileComponent,
    OwnerProfileComponent,
    ManagerProfileComponent,
    AdminProfileComponent,
    InputComponent,
    WideButtonComponent,
    CategoryBadgeComponent,
    SmallButtonComponent,
    CircleButtonComponent,
    QueueDetailsComponent,

  ],

  exports: [
    // Modules >>
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatIconModule,

    // Components >>
    ServiceProviderCardComponent,
    InQueueComponent,
    QueueCardComponent,
    ReserverProfileComponent,
    OwnerProfileComponent,
    ManagerProfileComponent,
    AdminProfileComponent,
    InputComponent,
    WideButtonComponent,
    CategoryBadgeComponent,
    SmallButtonComponent,
    CircleButtonComponent,
    QueueDetailsComponent,

  ],
})
export class SharedModule {}
