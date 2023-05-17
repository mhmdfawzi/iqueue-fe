import { GeneralService } from './generalService.service';
import { Injectable } from "@angular/core";
import { LoginForm, RegisterForm } from "../models/interfaces/form.model";
import { environment } from 'src/environments/environment';
import { Queue } from '../models/interfaces/queue.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderOwnerService {

  constructor(
    private generalService: GeneralService
  ) {}

  getQueues(serviceProviderID: string | number){
    this.generalService.getAPIData(`${environment.apiUrl}/queues/serviceProvider/${serviceProviderID}`)
  }

  getQueue(queueID: string | number){
    this.generalService.getAPIData(`${environment.apiUrl}/queues/${queueID}`)
  }

  putQueue(queueID: string | number, queueData: Queue){
    this.generalService.putAPIData(`${environment.apiUrl}/queues/${queueID}`, queueData)
  }

  postQueue(queueData: Queue){
    this.generalService.putAPIData(`${environment.apiUrl}/queues`, queueData)
  }

  deleteQueue(queueID: string | number){
    this.generalService.getAPIData(`${environment.apiUrl}/queues/${queueID}`)
  }

}
