import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {AlertifyService} from "../services/alertify.service";
import {UserService} from "../services";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private alertifyService: AlertifyService,
    private userService: UserService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(catchError(err => this.handleError(err)))
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status == 401) {
      this.unauthErrorHandler();
    }
    const message = this.getErrorMessage(error);
    this.alertifyService.error(message);
    return throwError(message);

  }

  getErrorMessage(error: HttpErrorResponse) {
    let errorMessage = 'Неизвестаня ошибка';
    if (error.error instanceof ErrorEvent) {
      // Client side error
      console.log('client')
      errorMessage = error.error.message;
    } else {
      console.log('server')
      if (error.status != 0) {
        // Server side error
        errorMessage = error.error.message || error.message;
      }
    }
    console.log(error)
    return errorMessage;
  }

  unauthErrorHandler() {
    this.userService.cleanAuth();
  }

}
