import { Component, OnInit } from '@angular/core';
import { SlideService } from './shared/components/slide-menu/slide.service';
import { AgentService } from './shared/services/agent.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthService } from './shared/services/auth-services/auth.service';

interface Route{
  caption: string,
  route: string,
  icon?: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isMobile: boolean = false;
  showSideMenu: boolean = false;
  showNav: boolean = true;
  addClassMain: boolean = true;
  navbarTitle!: string;

  appRoutes: Route[] = [
    {caption: 'Home', route: 'home', icon: 'home'},
    {caption: 'Current Queue', route: 'in-queue', icon: 'queue_play_next'},
    {caption: 'Settings', route: 'settings', icon: 'settings'},
    {caption: 'Log out', route: 'login', icon: 'remove_circle_outline'},
  ]
  constructor(private agentService: AgentService, private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.isMobile = this.agentService.isAgentFromMobileDevice()

    this.router.events.subscribe(val => {
      if(val instanceof NavigationEnd){
        if(val.url === '/' || val.url === '/login' || val.url === '/sign-up'){
          console.log("The URL", val.url)
          this.showNav = false
          this.addClassMain = false
        }else{
          this.showNav = true
          this.addClassMain = true

        }
      }

      if(val instanceof NavigationStart){
        console.log("The URL", val.url)
        if(val.url === '/home'){
          this.navbarTitle = "Home"
        }else if(val.url.includes('/in-queue')){
          this.navbarTitle = "Queue"
        }else if(val.url === "settings"){
          this.navbarTitle = "Settings"
        }
      }
    })
  }

  navigate(route: string){
    if(route === "login"){
      this.authService.loggedInUser.next(null)
    }
    this.router.navigate([route])
  }

}
