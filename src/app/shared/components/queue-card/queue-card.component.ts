import { Component, Input, OnInit } from '@angular/core';
import { Queue } from '../../models/interfaces/queue.model';

@Component({
  selector: 'app-queue-card',
  templateUrl: './queue-card.component.html',
  styleUrls: ['./queue-card.component.scss']
})
export class QueueCardComponent implements OnInit {

  @Input({required: true}) queue!: Queue;
  @Input({required: true}) index!: number;

  ngOnInit(): void {

  }

  selfDelete(){
  }
}
