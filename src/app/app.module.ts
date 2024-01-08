//Modules >>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
// import {CookieService} from 'ngx-cookie-service';

// Components >>
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { DocumentsComponent } from './views/documents/documents.component';
import { LoginComponent } from './views/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileHomeComponent } from './views/profile-home/profile-home/profile-home.component';
import { TabsBarComponent } from './layout/tabs-bar/tabs-bar.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';

// Interceptors
import { HttpInterceptorService } from './shared/services/HttpInterceptors/http-interceptor.service';
import { ErrorInterceptor } from './shared/services/HttpInterceptors/error-interceptor.service';
import { CustomToastComponent } from './layout/custom-toast/custom-toast.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutUsComponent,
    DocumentsComponent,
    LoginComponent,
    ProfileHomeComponent,
    TabsBarComponent,
    SignUpComponent,
    CustomToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule
    // CookieModule.withOptions()
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}, {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
