import { Component, OnInit } from '@angular/core';
import { SlideService } from './shared/components/slide-menu/slide.service';
import { AgentService } from './shared/services/agent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isMobile: boolean = false;
  showSlide: boolean = false;
  title: any;

  constructor(private agentService: AgentService, private slideService: SlideService){}

  ngOnInit(): void {
    this.isMobile = this.agentService.isAgentFromMobileDevice()

    this.slideService.showSlide.subscribe(res => {
      this.showSlide = res
    })
  }

  menuBtnClicked(){
    this.slideService.showSlide.next(!this.showSlide)
  }
}
