import { Component, OnInit } from '@angular/core';
import { QueueManagerService } from 'src/app/shared/services/queue-manager.service';

@Component({
  selector: 'app-manager-profile',
  templateUrl: './manager-profile.component.html',
  styleUrls: ['./manager-profile.component.scss']
})
export class ManagerProfileComponent implements OnInit {

  constructor(private qManager: QueueManagerService){}

  queueReservations!: any[];
  queueId = "63b725afd14a1f4265cb562f"

  ngOnInit(): void {
    this.callQueueReservations();
  }

  callQueueReservations(){
    this.qManager.getQueueReservations(this.queueId).subscribe(res => {
      console.log("Reservation QUEUE :", res)
      this.queueReservations = res.data
    })
  }

  moveNext(){
    this.qManager.moveQueue(this.queueId).subscribe(res => {
      console.log("Moving a queue (response)", res);

      this.callQueueReservations()
    })
  }
}
