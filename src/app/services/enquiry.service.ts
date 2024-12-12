import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Enquiry {
  id: string;
  name: string;
  company_name: string;
  email: string;
  mobilenumber: string;
  address: string;
  status: string;
  created_at: string;
}

export interface ApiResponse {
  data: Enquiry[];
  pagination: {
    currentPage: number;
    pageSize: number;
    totalRecords: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

export interface StatusUpdateResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}
  
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  
  getAllEnquiries(page: number = 1, pageSize: number = 10): Observable<ApiResponse> {
    const payload = { page, pageSize };
    return this.http.post<ApiResponse>(`${this.baseURL}/api/enquiries/getAllEnquiries/`, payload);
  }

  updateEnquiryStatus(id: string, status: string): Observable<StatusUpdateResponse> {
    return this.http.put<StatusUpdateResponse>(
      `${this.baseURL}/api/enquiries/updateStatus/`,
      { id, status },
      { headers: this.getHeaders() }
    );
  }
}