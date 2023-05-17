import { Component, OnInit } from '@angular/core';
import { ServiceProvider } from 'src/app/shared/models/interfaces/sp.model';

@Component({
  selector: 'app-owner-profile',
  templateUrl: './owner-profile.component.html',
  styleUrls: ['./owner-profile.component.scss']
})
export class OwnerProfileComponent implements OnInit{


  serviceProvider!: ServiceProvider;

  queues: any[] = [
    {qName: "Queue 1", currentClients: 5},
    {qName: "Queue 2", currentClients: 2},
    {qName: "Queue 3", currentClients: 7}
  ]

  ngOnInit(): void {

  }


}
