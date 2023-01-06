//Modules >>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CookieModule } from 'ngx-cookie';
import { HttpClientModule } from '@angular/common/http';

// Components >>
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { DocumentsComponent } from './views/documents/documents.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileHomeComponent } from './views/profile-home/profile-home/profile-home.component';
import { SlideMenuComponent } from './shared/components/slide-menu/slide-menu.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AboutUsComponent,
    DocumentsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileHomeComponent,
    SlideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CookieModule.withOptions()
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
