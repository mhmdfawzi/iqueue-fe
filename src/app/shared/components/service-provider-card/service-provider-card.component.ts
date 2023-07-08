import { Component, Input, OnInit } from '@angular/core';
import { ServiceProvider } from '../../models/interfaces/sp.model';
import { ProfileService, QueuesResponse, ReservationResponse, ReservingResponse } from '../../services/profile.service';
import { Reserver, ReserveRequest } from './../../models/interfaces/customer.model';
import { Router } from '@angular/router';
import { LoggedUser } from '../../services/auth-services/auth.service';
import { Queue } from '../../models/interfaces/queue.model';
// import { AuthService } from '../../services/auth-services/auth.service';

@Component({
  selector: 'app-service-provider-card',
  templateUrl: './service-provider-card.component.html',
  styleUrls: ['./service-provider-card.component.scss']
})
export class ServiceProviderCardComponent implements OnInit {

  @Input({required: true}) loggedInUser!: LoggedUser;
  @Input() serviceProviderData!: ServiceProvider;
  @Input() thumbnailId!: number;

  queues: Queue[] = [];

  constructor(private profileService: ProfileService, private router: Router){}

  ngOnInit(): void {
    console.log("Card data :", this.serviceProviderData)
    this.populateQueues()
  }

  reserve(){
    let reservation = {
      reserver: this.loggedInUser.id, // Logged User ID
      queue: "" // The queue ID
    }

    let isQueuesCountMoreThanOne = this.checkQueues()

    if(isQueuesCountMoreThanOne){

      // Nav to queues view

      console.log("Has many queues , where to go !")

    }else{
      console.log("The queues", this.queues)
      reservation.queue = this.queues[0]._id // getting the ID of the only element in the array

      this.profileService.reserve(reservation).subscribe((res: ReservingResponse) => {
        console.log("Response of reserving ::", res )
        this.router.navigate(["/in-queue"], {queryParams:{reservationId: res.data._id}})
      })
    }

  }

  checkQueues(): boolean{ // Check queues, if one queue => reserve in it, if multible then make user choose
    console.log("The queues are :", this.queues)
    return this.queues.length > 1
  }

  populateQueues(){ // call API to get the queues
    this.profileService.getServiceProviderQueues(this.serviceProviderData._id).subscribe((res: QueuesResponse) => {
      this.queues = res.data
      console.log("The queues fetch", this.queues)
    })
  }
}
