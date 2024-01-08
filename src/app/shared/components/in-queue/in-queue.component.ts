import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AgentService } from '../../services/agent.service';
import { ProfileService, ReservationResponse } from './../../services/profile.service';
import { ReservationDetails } from '../../models/interfaces/queue.model';

@Component({
  selector: 'app-in-queue',
  templateUrl: './in-queue.component.html',
  styleUrls: ['./in-queue.component.scss']
})
export class InQueueComponent implements OnInit{

  isMobile: boolean = false;
  reservationId!: string; // sent in query params in service provider card

  reservationDetails!: ReservationDetails;

  constructor(private agentService: AgentService, private router: Router, private route: ActivatedRoute, private profileService: ProfileService){}

  ngOnInit(): void {
    this.isMobile = this.agentService.isAgentFromMobileDevice()

    this.reservationId = this.route.snapshot.queryParams["reservationId"]

    this.profileService.reservationDetails(this.reservationId).subscribe((res:ReservationResponse) => {
      this.reservationDetails = res.data
    })
  }

  cancelQueue(){
    //Later we should implement a function to cancel the queue then nav to home
    this.router.navigate(["/basic/home"])
  }

  navToHome(){
    this.router.navigate(["/home"])
  }

}
