import { GeneralService } from './generalService.service';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

interface ReserverModel{
  reserver: string,
  queue: string
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

  reserve(reserverData: ReserverModel){
    return this.generalService.postAPIData(`${environment.apiUrl}/reservations`, reserverData)
  }

}
