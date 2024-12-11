import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}

  login(email: string, password: string, rememberMe: boolean): Observable<any> {
    return this.http.post(`${this.baseURL}/api/auth/login`, { email, password, rememberMe })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.token);
        })
      );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): Observable<any> {
    localStorage.removeItem('token');
    return of({});
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}