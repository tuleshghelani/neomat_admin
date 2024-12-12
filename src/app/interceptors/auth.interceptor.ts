import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class authInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap({        
        error: (err: any) => {
          if (err instanceof HttpErrorResponse && err.status === 401) {
            this.handleUnauthorized();
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.handleUnauthorized();
        }
        return throwError(() => error);
      })
    );
  }

  private handleUnauthorized(): void {
    localStorage.clear();
    sessionStorage.clear();
    
    this.snackBar.open('Session expired. Please login again.', 'Close', {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    });

    setTimeout(() => {
      this.router.navigate(['/login'], { replaceUrl: true });
    }, 100);
  }
}