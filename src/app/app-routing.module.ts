import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InQueueComponent } from './shared/components/in-queue/in-queue.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { DocumentsComponent } from './views/documents/documents.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileHomeComponent } from './views/profile-home/profile-home/profile-home.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { AuthGuardService } from './shared/services/guards/auth-guard.service';
import { QueueDetailsComponent } from './shared/components/queue-details/queue-details.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: ProfileHomeComponent, canActivate: [AuthGuardService]},
  {path: "login", component: LoginComponent},
  {path: "sign-up", component: SignUpComponent},
  {path: "in-queue", component: InQueueComponent, canActivate: [AuthGuardService]},
  {path: "queue-details", component: QueueDetailsComponent},
  {path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
