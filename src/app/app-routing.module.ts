import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InQueueComponent } from './shared/components/in-queue/in-queue.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { DocumentsComponent } from './views/documents/documents.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "reserve",

  loadChildren: () =>
  import("./views/profile-home/profile-home.module").then(
    (m) => m.ProfileHomeModule
  )
},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "documents", component: DocumentsComponent},
  {path: "in-queue", component: InQueueComponent},
  {path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
