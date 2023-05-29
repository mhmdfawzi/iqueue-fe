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
    return this.generalService.getAPIData<QueuesDetailsResponse>(`${environment.apiUrl}/reservations/manager/${managerID}`)
    // return this.generalService.getAPIData<QueuesDetails>(`${environment.apiUrl}/reservations/queue/${id}`)
  }

  moveQueue(id: string){
    return this.generalService.putAPIData(`${environment.apiUrl}/queues/moveNext/${id}`, {})
  }

}
