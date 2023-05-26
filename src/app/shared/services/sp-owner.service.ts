import { GeneralService } from './generalService.service';
import { Injectable } from "@angular/core";
import { LoginForm, RegisterForm } from "../models/interfaces/form.model";
import { environment } from 'src/environments/environment';
import { Queue, QueueForm } from '../models/interfaces/queue.model';
import { Observable } from 'rxjs';
import { ServiceProvider } from '../models/interfaces/sp.model';
import { Manager } from '../models/interfaces/manager.model';

export interface QueuesResponse{
  success: boolean,
  data: {
    queues: Queue[],
    serviceProvider: ServiceProvider
  }
}

export interface ResponseManagers{
  data: Manager[] ,
  success: boolean
}

export interface QueueResponse{
  success: boolean,
  data: Queue
}

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderOwnerService {

  serviceProvider!: ServiceProvider; // Holds the service provider if the logged in account is an Owner!

  constructor(
    private generalService: GeneralService
  ) {}

  /**
   * This method returns All queues of one service provider.
   * @param ownerID pass the Service Provider ID
   * @returns service provider details and the queues
   */
  getQueues(ownerID: string | number): Observable<QueuesResponse>{
    return this.generalService.getAPIData<QueuesResponse>(`${environment.apiUrl}/serviceProviders/owner/${ownerID}/queues`)
  }

  // getQueues(serviceProviderID: string | number): Observable<QueuesResponse>{
  //   return this.generalService.getAPIData<QueuesResponse>(`${environment.apiUrl}/queues/serviceProvider/${serviceProviderID}`)
  // }

  /**
   * This method returns details of one queue.
   * @param queueID pass the queue ID
   * @returns Queue details
   */
  getQueue(queueID: string | number): Observable<QueueResponse>{
    return this.generalService.getAPIData<QueueResponse>(`${environment.apiUrl}/queues/${queueID}`)
  }

  putQueue(queueID: string | number, queueData: Queue){
    return this.generalService.putAPIData(`${environment.apiUrl}/queues/${queueID}`, queueData)
  }

    /**
   * This method returns response of one created queue.
   * @param queueData pass the data of the Queue
   * @returns Queue details
   */
  postQueue(queueData: QueueForm): Observable<QueueResponse>{
    return this.generalService.postAPIData<QueueResponse>(`${environment.apiUrl}/queues`, queueData)
  }

  deleteQueue(queueID: string){
    return this.generalService.deleteAPIData(`${environment.apiUrl}/queues/${queueID}`)
  }

  /**
   * This method returns managers of service provider of the Logged in owner .
   * @param spID pass the Service provider ID
   * @returns Managers available for this Service provider
   */
  getManagers(spID: string): Observable<ResponseManagers>{
    return this.generalService.getAPIData<ResponseManagers>(`${environment.apiUrlAuth}/managers/${spID}`)
  }
}
