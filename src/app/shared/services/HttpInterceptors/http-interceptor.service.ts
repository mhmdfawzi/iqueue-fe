

import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor{


  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    let modifiedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem("taburJWTToken")}`
      }
    })

    return next.handle(modifiedReq)

    //* uncomment to modify the HTTP RESPONSE
    // return next.handle(modifiedReq).pipe(map((event: HttpEvent<any>) => {
    //   if (event instanceof HttpResponse){
    //     event = event.clone({body: this.modifyBody(event.body)})
    //   }

    //   return event
    // }))
  }

  // private modifyBody(body: any){
  //   body = body.data = 'tested in angular, dummy text'
  // }
}
