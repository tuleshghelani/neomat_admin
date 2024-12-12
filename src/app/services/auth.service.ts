import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = environment.baseURL;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(email: string, password: string, rememberMe: boolean): Observable<any> {
    return this.http.post(`${this.baseURL}/api/auth/login`, {
      email,
      password,
      rememberMe
    }).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  logout(): Observable<any> {
    return new Observable(observer => {
      try {
        localStorage.clear();
        this.router.navigate(['/login']);
        observer.next(true);
        observer.complete();
      } catch (error) {
        observer.error(error);
      }
    });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}