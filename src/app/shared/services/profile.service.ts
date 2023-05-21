import { GeneralService } from './generalService.service';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { Queue, ReservationDetails, ReservingDetails } from '../models/interfaces/queue.model';
import { Observable } from 'rxjs';

interface ReserverModel{
  reserver: string,
  queue: string
}

interface TaburHttpRes {
  success: boolean
}
export interface QueuesResponse extends TaburHttpRes{
  data: Queue[]
}

export interface ReservationResponse extends TaburHttpRes{ // Response of GETTING reservation details
  data: ReservationDetails
}

export interface ReservingResponse extends TaburHttpRes{ // Response of POSTING a reservation in queue
  data: ReservingDetails
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private generalService: GeneralService
  ) {}

  getProviders(){
    return this.generalService.getAPIData(`${environment.apiUrl}/serviceProviders`)
  }

  reserve(reserverData: ReserverModel): Observable<ReservingResponse>{
    return this.generalService.postAPIData<ReservingResponse>(`${environment.apiUrl}/reservations`, reserverData)
  }

  reservationDetails(id: string): Observable<ReservationResponse>{
    return this.generalService.getAPIData<ReservationResponse>(`${environment.apiUrl}/reservations/${id}`)
  }

  getServiceProviderQueues(id: string): Observable<QueuesResponse>{
    return this.generalService.getAPIData<QueuesResponse>(`${environment.apiUrl}/queues/serviceProvider/${id}`)
  }
}
