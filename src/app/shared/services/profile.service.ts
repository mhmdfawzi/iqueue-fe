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

export interface ProvidersResponse {
  data: Provider[],
  message: string,
  statusCode: number
}
export interface Provider {
  address: string,
  description: string,
  id: number,
  lat: number,
  logo: string,
  long: number,
  name: string,
  phone: string,
  workingDays: string,
  workingHours: string
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private generalService: GeneralService
  ) {}

  getProviders(category?: number, published: boolean= true): Observable<ProvidersResponse>{

    if(category){
      return this.generalService.getAPIData<ProvidersResponse>(`${environment.apiUrl}provider/list?categoryId=${category}`)

    }else{
      return this.generalService.getAPIData<ProvidersResponse>(`${environment.apiUrl}provider/list`)
    }
  }

  reserve(reserverData: ReserverModel): Observable<ReservingResponse>{
    return this.generalService.postAPIData<ReservingResponse>(`${environment.apiUrl}reservations`, reserverData)
  }

  reservationDetails(id: string): Observable<ReservationResponse>{
    return this.generalService.getAPIData<ReservationResponse>(`${environment.apiUrl}reservation/info/${id}`)
  }

  getServiceProviderQueues(id: number): Observable<QueuesResponse>{
    return this.generalService.getAPIData<QueuesResponse>(`${environment.apiUrl}queue/list?providerId=${id}`)
  }
}
