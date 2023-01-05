import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-queue-card',
  templateUrl: './queue-card.component.html',
  styleUrls: ['./queue-card.component.scss']
})
export class QueueCardComponent {

  @Input() queueData: any;

  selfDelete(){
    console.log("DELETED QUEUE")
  }
}
