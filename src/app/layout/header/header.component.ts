import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/shared/services/agent.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  isMobile: boolean = false;

  constructor(private agentService: AgentService){}

  ngOnInit(): void {
    this.isMobile = this.agentService.isAgentFromMobileDevice()
  }

}
