//Modules >>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
// import {CookieService} from 'ngx-cookie-service';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

// Components >>
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { DocumentsComponent } from './views/documents/documents.component';
import { LoginComponent } from './views/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileHomeComponent } from './views/profile-home/profile-home/profile-home.component';
import { SlideMenuComponent } from './shared/components/slide-menu/slide-menu.component';
import { TabsBarComponent } from './layout/tabs-bar/tabs-bar.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';

// Interceptors
import { HttpInterceptorService } from './shared/services/HttpInterceptors/http-interceptor.service';
import { AuthGuardService } from './shared/services/guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutUsComponent,
    DocumentsComponent,
    LoginComponent,
    ProfileHomeComponent,
    SlideMenuComponent,
    TabsBarComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // CookieModule.withOptions()
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
