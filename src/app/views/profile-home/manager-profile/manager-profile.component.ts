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
    this.qManager.getQueueReservationsByManagerID(this.authService.loggedInUser?.id!).subscribe((res:QueuesDetailsResponse) => {
      console.log("Reservation QUEUE :", res)
      // this.queueReservations = res.data.reservations
      this.queue = res.data.queue

      this.qManager.getQueueReservationsByQueueID(this.queue._id).subscribe((res:any) => {
        this.queueReservations = res.data
      })
    })
  }

  moveNext(){
    this.qManager.moveQueue(this.queue._id).subscribe(res => {
      console.log("Moving a queue (response)", res);

      this.callQueueReservations()
    })
  }

  toggleQueue(){
    console.log("Clicked")

    //Keepings this code for optimistic UI reflection.
    this.queueStatus === "open" ? this.queueStatus = "closed" : this.queueStatus = "open" // <<

    this.qManager.toggleQueue(this.queue._id).subscribe((res: QueueToggleResponse) => {
      console.log("res", res)
      res.data.isActive === true ? this.queueStatus = "open" : this.queueStatus = "closed";
    })
  }
}
