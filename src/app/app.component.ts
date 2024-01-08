import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthService, RouteItem } from './shared/services/auth-services/auth.service';

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
  appRoutes: RouteItem[] = [
    // {caption: 'Home', route: 'home', icon: 'home'},
    // {caption: 'Current Queue', route: 'in-queue', icon: 'queue_play_next'},
    // {caption: 'Settings', route: 'settings', icon: 'settings'},
    // {caption: 'Log out', route: 'login', icon: 'remove_circle_outline'},
  ]
  constructor(
    // private agentService: AgentService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    // this.isMobile = this.agentService.isAgentFromMobileDevice()

    this.router.events.subscribe(val => {
      if(val instanceof NavigationEnd){

        if(val.url === '/' || val.url === '/login' || val.url === '/sign-up'){
          this.showNav = false
          this.addClassMain = false
        }else{
          this.populateNavbarHeader(val)

          this.showNav = true
          this.addClassMain = true
          this.appRoutes = this.authService.getUserMenuItems();

        }
      }

      if(val instanceof NavigationStart){
        this.populateNavbarHeader(val)
      }
    })
  }

  populateNavbarHeader(val: {url: string}){
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

  isActive(url : string){
    return `/${url}` == `${this.router.url}`
  }

  navigate(route: string){

    if(route === "login"){
      this.authService.logout()
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
