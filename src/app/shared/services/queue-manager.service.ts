import { GeneralService } from './generalService.service';
import { Injectable } from "@angular/core";
import { LoginForm, RegisterForm } from "../models/interfaces/form.model";
import { environment } from 'src/environments/environment';
import { Queue, ReservationDetails } from '../models/interfaces/queue.model';
import { Observable } from 'rxjs';

export interface QueuesDetailsResponse{
  success: boolean,
  data: QueuesDetails
}
export interface QueuesDetails {
  queue: Queue,
  reservations: ReservationDetails[]
}

export interface QueueToggleResponse{
  success: boolean,
  data: Queue,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class QueueManagerService {

  constructor(
    private generalService: GeneralService
  ) {}


  /**
   *
   * @param managerID Pass the ID of the logged in manager
   * @returns returns the Queue details and its reservations
   */
  getQueueReservationsByManagerID(managerID: string): Observable<QueuesDetailsResponse>{
    return this.generalService.getAPIData<QueuesDetailsResponse>(`${environment.apiUrl}/queue/manager/${managerID}`)
    // return this.generalService.getAPIData<QueuesDetails>(`${environment.apiUrl}/reservations/queue/${id}`)
  }

    /**
   *
   * @param queueID Pass the ID of the Queue
   * @returns returns the Queue details and its reservations
   */
    getQueueReservationsByQueueID(queueID: string): Observable<QueuesDetailsResponse>{
      return this.generalService.getAPIData<QueuesDetailsResponse>(`${environment.apiUrl}queue/${queueID}/reservations`)
      // return this.generalService.getAPIData<QueuesDetails>(`${environment.apiUrl}/reservations/queue/${id}`)
    }

  moveQueue(id: string){
    return this.generalService.putAPIData(`${environment.apiUrl}/queue/moveNext/${id}`, {})
  }

  /**
   *
   * @param id pass the id of the queue to have it toggled
   *  @returns returns the queue details and wither it's active or not
   */
  toggleQueue(id : string): Observable<QueueToggleResponse>{
    return this.generalService.putAPIData<QueueToggleResponse>(`${environment.apiUrl}/queues/toggle/${id}`, null)
  }

    /**
   *
   * @param id pass the id of the queue to have it toggled on
   *  @returns returns the queue details and wither it's active or not
   */
  toggleQueueOn(id : string){
    return this.generalService.putAPIData<QueueToggleResponse>(`${environment.apiUrl}queue/activate/${id}`, null)

  }

    /**
   *
   * @param id pass the id of the queue to have it toggled off
   *  @returns returns the queue details and wither it's active or not
   */
  toggleQueueOff(id : string){
    return this.generalService.putAPIData<QueueToggleResponse>(`${environment.apiUrl}/queues/toggle/${id}`, null)

  }
}
