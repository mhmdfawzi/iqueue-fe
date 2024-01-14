import { Component, Input, OnInit } from '@angular/core';
import { Queue, ReservationDetails } from 'src/app/shared/models/interfaces/queue.model';
import { LoggedUser, AuthService } from 'src/app/shared/services/auth-services/auth.service';
import { QueueManagerService, QueueToggleResponse, QueuesDetailsResponse } from 'src/app/shared/services/queue-manager.service';

@Component({
  selector: 'app-manager-profile',
  templateUrl: './manager-profile.component.html',
  styleUrls: ['./manager-profile.component.scss']
})
export class ManagerProfileComponent implements OnInit {

  @Input({required: true}) loggedInUser!: LoggedUser | null;
  queueStatus: "open" | "closed" = "open"

  constructor(private qManager: QueueManagerService, private authService: AuthService){}

  queueReservations!: ReservationDetails[];
  queue!: Queue;

  // queueId = "646d32e8f3416bd5f19ca8b5"

  ngOnInit(): void {
    this.callQueueReservations();
  }

  callQueueReservations(){
    this.qManager.getQueueReservationsByManagerID(this.authService.loggedInUser?.sub!).subscribe((res:QueuesDetailsResponse) => {
      // this.queueReservations = res.data.reservations
      this.queue = res.data.queue

      this.qManager.getQueueReservationsByQueueID(this.queue.id).subscribe((res:any) => {
        this.queueReservations = res.data
      })
    })
  }

  moveNext(){
    this.qManager.moveQueue(this.queue.id).subscribe(res => {

      this.callQueueReservations()
    })
  }

  toggleQueue(){

    //Keepings this code for optimistic UI reflection.
    this.queueStatus === "open" ? this.queueStatus = "closed" : this.queueStatus = "open" // <<

    this.qManager.toggleQueue(this.queue.id).subscribe((res: QueueToggleResponse) => {
      res.data.isActive === true ? this.queueStatus = "open" : this.queueStatus = "closed";
    })
  }
}
