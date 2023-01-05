import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-in-queue',
  templateUrl: './in-queue.component.html',
  styleUrls: ['./in-queue.component.scss']
})
export class InQueueComponent {

  constructor(private router: Router){}

  cancelQueue(){
    this.router.navigate(["/"])
  }
}
