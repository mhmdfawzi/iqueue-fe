// Modules >>
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// Components >>
import { LogFormComponent } from './log-form/log-form.component';
import { BaseFormComponent } from './models/components/base-form.component';
import { ServiceProviderCardComponent } from './components/service-provider-card/service-provider-card.component';
import { InQueueComponent } from './components/in-queue/in-queue.component';
import { QueueCardComponent } from './components/queue-card/queue-card.component';
import { AdminProfileComponent } from '../views/profile-home/admin-profile/admin-profile.component';
import { ManagerProfileComponent } from '../views/profile-home/manager-profile/manager-profile.component';
import { OwnerProfileComponent } from '../views/profile-home/owner-profile/owner-profile.component';
import { ReserverProfileComponent } from '../views/profile-home/reserver-profile/reserver-profile.component';
import { SlideMenuComponent } from './components/slide-menu/slide-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],

  declarations: [
    LogFormComponent,
    BaseFormComponent,
    ServiceProviderCardComponent,
    InQueueComponent,
    QueueCardComponent,
    ReserverProfileComponent,
    OwnerProfileComponent,
    ManagerProfileComponent,
    AdminProfileComponent,
  ],

  exports: [
    // Modules >>
    CommonModule,
    FormsModule,

    // Components >>
    LogFormComponent,
    ServiceProviderCardComponent,
    InQueueComponent,
    QueueCardComponent,
    ReserverProfileComponent,
    OwnerProfileComponent,
    ManagerProfileComponent,
    AdminProfileComponent
  ],
})
export class SharedModule {}
