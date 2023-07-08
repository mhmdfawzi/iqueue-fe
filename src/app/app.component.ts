import { Component, OnInit } from '@angular/core';
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

  // this.authService.getUserMenuItems();
  appRoutes: Route[] = [
    // {caption: 'Home', route: 'home', icon: 'home'},
    // {caption: 'Current Queue', route: 'in-queue', icon: 'queue_play_next'},
    // {caption: 'Settings', route: 'settings', icon: 'settings'},
    // {caption: 'Log out', route: 'login', icon: 'remove_circle_outline'},
  ]
  constructor(
    // private agentService: AgentService,
    private router: Router,
    private authService: AuthService
    ){}

  ngOnInit(): void {
    // this.isMobile = this.agentService.isAgentFromMobileDevice()

    this.router.events.subscribe(val => {
      if(val instanceof NavigationEnd){
        if(val.url === '/' || val.url === '/login' || val.url === '/sign-up'){
          this.showNav = false
          this.addClassMain = false
        }else{
          this.showNav = true
          this.addClassMain = true
          this.appRoutes = this.authService.getUserMenuItems();

        }
      }

      if(val instanceof NavigationStart){
        console.log
        if(val.url === '/home'){
          this.navbarTitle = "Home"
        }else if(val.url.includes('/in-queue')){
          this.navbarTitle = "Queue"
        }else if(val.url === "/settings"){
          this.navbarTitle = "Settings"
        }else if(val.url.includes("/queue-details")){
          this.navbarTitle = "Queue Details"
        }
      }
    })
  }

  navigate(route: string){
    if(route === "login"){
      this.authService.loggedInUser = null
    }
    this.router.navigate([route])
  }

  toggleTheme(themeColor: string){

    if(document.body.classList.contains(themeColor)){
      return
    }
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
    // document.body.classList.toggle(Mode.DARK);
    // if (this.currentMode === Mode.LIGHT) {
    //   this.updateCurrentMode(Mode.DARK);
    // } else {
    //   this.updateCurrentMode(Mode.LIGHT);
    // }
  }
}
