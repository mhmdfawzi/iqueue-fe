import { Component, Input, OnInit } from '@angular/core';
import { Queue, ReservationDetails } from 'src/app/shared/models/interfaces/queue.model';
import { LoggedUser, AuthService } from 'src/app/shared/services/auth-services/auth.service';
import { QueueManagerService, QueuesDetailsResponse } from 'src/app/shared/services/queue-manager.service';

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
      this.queueReservations = res.data.reservations
      this.queue = res.data.queue
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
    this.queueStatus === "open" ? this.queueStatus = "closed" : this.queueStatus = "open"
  }
}
