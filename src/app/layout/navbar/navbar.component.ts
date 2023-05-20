import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AgentService } from 'src/app/shared/services/agent.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  @Output() menuClicked: EventEmitter<any> = new EventEmitter();
  @Input() title: string = "";

  isMobile: boolean = false;

  constructor(private agentService: AgentService){}

  ngOnInit(): void {
    this.isMobile = this.agentService.isAgentFromMobileDevice()
  }


  clickMenu(){
    this.menuClicked.emit();
  }

}
