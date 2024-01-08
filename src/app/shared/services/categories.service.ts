import { GeneralService } from './generalService.service';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../models/interfaces/categories.model';

export interface CategoriesResponse{
  data: Category[],
  statusCode: number,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService{

  constructor(private generalService: GeneralService){}

  /**
   *
   * @returns returns a Categories array
   */
  getCategories(): Observable<CategoriesResponse>{
    return this.generalService.getAPIData<CategoriesResponse>(`${environment.apiUrl}category/list`)
  }

}
