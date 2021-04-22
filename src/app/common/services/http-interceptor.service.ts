import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { KudosSessionService } from './session.service';
import { NO_INTERCEPT_HTTP_VALUE, NO_INTERCEPT_HTTP_KEY } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class KudosHttpInterceptorService implements HttpInterceptor {
  constructor(private router: Router, private session: KudosSessionService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.session.sessionExists()) {
      return next.handle(req.clone());
    }
    if (req.params.get(NO_INTERCEPT_HTTP_KEY) !== NO_INTERCEPT_HTTP_VALUE) {
      let headers = req.headers.set('Authorization', `Bearer ${this.session.AccessToken}`);
      return next.handle(req.clone({ headers: headers })).pipe(
        tap(
          (succ) => {
            if (succ instanceof HttpResponse) return succ;
            return;
          },
          (err: any) => {
            if (err instanceof HttpErrorResponse)
              if (err.status === 401 && err.url?.indexOf('login') === -1) {
                this.session.clearSession();
                this.router.navigate(['login']);
              }
          }
        )
      );
    } else {
      return next.handle(
        req.clone({
          params: req.params.delete(NO_INTERCEPT_HTTP_KEY),
        })
      );
    }
  }
}
