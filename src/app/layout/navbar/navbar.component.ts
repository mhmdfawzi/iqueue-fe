import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/shared/services/agent.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  isMobile: boolean = false;

  constructor(private agentService: AgentService){}

  ngOnInit(): void {
    this.isMobile = this.agentService.isAgentFromMobileDevice()
    console.log("Is mobile ??", this.isMobile)
  }



}
