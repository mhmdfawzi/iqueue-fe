import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../auth-services/auth.service';
import { CustomToasterService } from '../custom-toaster.service';

interface ServerError {
  error: ErrorBody,
  headers: HttpHeaders,
  message: string,
  name: string,
  ok: boolean,
  status: number,
  statusText: string,
  url: string
}

interface ErrorBody {
  error : ErrorJWT,
  message: string,
  success: boolean
}

interface ErrorJWT {
  expiredAt: Date,
  message: string,
  name: string
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private toaster: CustomToasterService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    let errTitle: string = "";
    let errContent: string = "";

    return next.handle(request).pipe(
      catchError((err: ServerError) => {
        console.warn('EL ERR', err);
        const error = new Error(err.message);
        if (err.status === 401) {

          errTitle = "Login Session Expired"
          errContent = "Please login again"

          // this.router.navigate(['/'])

          this.toaster.show(
            {title: errTitle, content: errContent, type: 0}
          )

        } else if (err.status === 403) {
        } else {
        }
        return throwError(() => error);
      })
    );
  }
}
