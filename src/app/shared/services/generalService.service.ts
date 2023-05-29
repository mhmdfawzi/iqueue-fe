import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private http: HttpClient,
  ) {}

  getAPIData<T>(apiUrl: string): Observable<T>{
    return this.http.get<T>(apiUrl).pipe(catchError((err) => this.errorHandler(err)))
  }

  postAPIData<T>(apiUrl: string, payload: any): Observable<T>{
    return this.http.post<T>(apiUrl, payload).pipe(catchError((err) => this.errorHandler(err)))
  }

  // postAPIData<T>(apiUrl: string, payload: any){
  //   return this.http.post(apiUrl, payload, {observe: 'response'}).pipe(catchError((err) => this.errorHandler(err)))
  // }

  putAPIData<T>(apiUrl: string, payload: any): Observable<T>{
    return this.http.put<T>(apiUrl, payload).pipe(catchError((err) => this.errorHandler(err)))
  }

  deleteAPIData<T>(apiUrl: string): Observable<T>{
    return this.http.delete<T>(apiUrl).pipe(catchError((err) => this.errorHandler(err)))
  }


  errorHandler(err: any){
    let errorMsg = '';
    if(err.error instanceof ErrorEvent){
      //Get Client Side Error
      errorMsg = err.error.message
    }

    if(err instanceof HttpErrorResponse){
      switch(err.status){
        case 401:{
          //Logic should be put here
          console.log(" Found 401 error : ", err)
          break
        }

        case 401:{
          //Logic should be put here
          console.log(" Found 401 error : ", err)
          break
        }

        case 403:{
          //Logic should be put here
          console.log(" Found 403 error : ", err)
          break
        }

        case 404:{
          //Logic should be put here
          console.log(" Found 404 error : ", err)
          break
        }

        case 500:{
          //Logic should be put here
          console.log(" Found 500 error : ", err)
          break
        }

        default: {
          console.log(" Found error >> : ", err)
          break
        }
      }
    }else{
      //Get Server-side error
      errorMsg = `Error Code: ${err.status}\nMessage: ${err.message}`
    }

    return throwError(errorMsg)
  }

}
