import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { CookieService } from "ngx-cookie";
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  // options = {
  //   // headers: {
  //   //   "ceo-token": this.getTokenFromCookies(),
  //   // },
  // };

  // private getTokenFromCookies() {
  //   // return `Bearer ${this._cookieService.get("ceo-token")}`;
  // }

  constructor(
    private http: HttpClient,
    private _cookieService: CookieService,
  ) {}

  getAPIData(apiUrl: string): Observable<any>{
    return this.http.get(apiUrl).pipe(catchError((err) => this.errorHandler(err)))
  }

  postAPIData(apiUrl: string, payload?: any): Observable<any>{
    return this.http.post(apiUrl, payload).pipe(catchError((err) => this.errorHandler(err)))
  }

  putAPIData(apiUrl: string, payload?: any): Observable<any>{
    return this.http.put(apiUrl, payload).pipe(catchError((err) => this.errorHandler(err)))
  }

  deleteAPIData(apiUrl: string): Observable<any>{
    return this.http.delete(apiUrl).pipe(catchError((err) => this.errorHandler(err)))
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
