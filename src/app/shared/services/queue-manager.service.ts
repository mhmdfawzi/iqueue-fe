import { GeneralService } from './generalService.service';
import { Injectable } from "@angular/core";
import { LoginForm, RegisterForm } from "../models/interfaces/form.model";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QueueManagerService {

  constructor(
    private generalService: GeneralService
  ) {}


  getQueueReservations(id: string){
    return this.generalService.getAPIData(`${environment.apiUrl}/reservations/queue/${id}`)
  }

  moveQueue(id: string){
    return this.generalService.putAPIData(`${environment.apiUrl}/queues/moveNext/${id}`)
  }

}
