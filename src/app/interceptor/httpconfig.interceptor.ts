import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpHeaders
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private router: Router, private auth: AuthService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                //Authorization: 'Bearer '+this.auth.getTokenbali(),
                // Authorization: `Bearer ${localStorage.getItem('token')}`,
                Authorization: `Bearer ${localStorage.getItem('tokenbali')}`,
            }
        });
        return next.handle(request).pipe(
            catchError(err => {
                if (err.status === 401) {
                    this.router.navigate(['/']);
                    localStorage.clear()
                }
                const error = (err && err.error && err.error.message) || err.statusText;
                return throwError(err);
            })
        );
    }
}
