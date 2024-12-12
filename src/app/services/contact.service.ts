import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Contact {
  id: string;
  full_name: string;
  email: string;
  subject: string;
  mobilenumber: string;
  message: string;
  status: string;
  created_at: string;
}

export interface ApiResponse {
  data: Contact[];
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
export class ContactService {
  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}

  getAllContacts(page: number = 1, pageSize: number = 10): Observable<ApiResponse> {
    const payload = { page, pageSize };
    return this.http.post<ApiResponse>(`${this.baseURL}/api/contacts/getAllContacts/`, payload);
  }

  updateContactStatus(id: string, status: string): Observable<StatusUpdateResponse> {
    return this.http.put<StatusUpdateResponse>(`${this.baseURL}/api/contacts/updateStatus/`, {
      id,
      status
    });
  }
} 