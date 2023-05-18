import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AgentService } from '../../services/agent.service';
import { ProfileService } from './../../services/profile.service';

@Component({
  selector: 'app-in-queue',
  templateUrl: './in-queue.component.html',
  styleUrls: ['./in-queue.component.scss']
})
export class InQueueComponent implements OnInit{

  isMobile: boolean = false;
  id!: string;

  reservationDetails: any;

  constructor(private agentService: AgentService, private router: Router, private route: ActivatedRoute, private profileService: ProfileService){}

  ngOnInit(): void {
    this.isMobile = this.agentService.isAgentFromMobileDevice()

    this.id = this.route.snapshot.queryParams["id"]

    this.profileService.reservationDetails(this.id).subscribe((res:any) => {
      console.log("response of reservation details :  ", res)
      this.reservationDetails = res.data
    })
  }

  cancelQueue(){
    this.router.navigate(["/basic/home"])
  }


}
