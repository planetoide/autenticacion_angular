import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthMessageObserverService } from './auth-message-observer.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private AuthMessageObserver: AuthMessageObserverService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = sessionStorage.getItem('token');
    const tokenized = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    return next.handle(tokenized).pipe(
      tap(
        event => this.handleResponse(req, event),
        error => this.handleError(req, error)
      )
    );
  }

  handleResponse(req: HttpRequest<any>, event: any) {
    console.log('ok desde el interceptor')
    if (event instanceof HttpResponse) {
      console.log('Request for: ', req.url,
          '\nResponse Status: ', event.status,
          '\nWith body: ', event.body);
    }
  }

  handleError(req: HttpRequest<any>, event: any) {
    console.log('bad desde el interceptor')
    console.log('Request for ', req.url,
          '\nResponse Status ', event.status,
          '\nWith error ', event.error);
    this.AuthMessageObserver.sendData( { error : event.error , status : event.status} );
    
  }
}
