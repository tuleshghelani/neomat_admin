import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';
import { Enquiry } from '../models/enquiry.model';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  private baseURL = environment.baseURL;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getEnquiries(): Observable<Enquiry[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });

    return this.http.get<Enquiry[]>(`${this.baseURL}/api/enquiries`, { headers });
  }
}