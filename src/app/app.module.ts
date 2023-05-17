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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileHomeComponent } from './views/profile-home/profile-home/profile-home.component';
import { SlideMenuComponent } from './shared/components/slide-menu/slide-menu.component';
import { TabsBarComponent } from './layout/tabs-bar/tabs-bar.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';

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
    CookieModule.withOptions()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
