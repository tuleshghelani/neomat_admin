import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, catchError, finalize, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Material Imports
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { environment } from '../../../environments/environment';

interface EnquiryData {
  id: string;
  name: string;
  company_name: string;
  email: string;
  mobilenumber: string;
  address: string;
  created_at: string;
}

interface PaginationInfo {
  currentPage: number;
  pageSize: number;
  totalRecords: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

interface ApiResponse {
  data: EnquiryData[];
  pagination: PaginationInfo;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['no', 'name', 'company_name', 'email', 'mobilenumber', 'address', 'created_at'];
  dataSource: EnquiryData[] = [];
  pagination: PaginationInfo = {
    currentPage: 1,
    pageSize: 10,
    totalRecords: 0,
    totalPages: 0,
    hasNext: false,
    hasPrevious: false
  };
  
  isLoading = false;
  customPageNumber = 1;
  error: string | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private http: HttpClient,
    private ngZone: NgZone,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadEnquiries();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadEnquiries(page: number = 1) {
    if (this.isLoading) return;
    
    this.isLoading = true;
    this.error = null;

    const token = localStorage.getItem('token');
    if (!token) {
      this.showError('Authentication token not found');
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.ngZone.runOutsideAngular(() => {
      this.http.post<ApiResponse>(`${environment.baseURL}/api/enquiries/getAllEnquiries/`, {
        page,
        pageSize: this.pagination.pageSize
      }, { headers }).pipe(
        takeUntil(this.destroy$),
        catchError(error => {
          this.ngZone.run(() => this.showError('Failed to load enquiries'));
          return of(null);
        }),
        finalize(() => {
          this.ngZone.run(() => {
            this.isLoading = false;
          });
        })
      ).subscribe(response => {
        if (response) {
          this.ngZone.run(() => {
            this.dataSource = response.data;
            this.pagination = response.pagination;
            this.customPageNumber = this.pagination.currentPage;
          });
        }
      });
    });
  }

  onPageChange(event: PageEvent) {
    this.pagination.pageSize = event.pageSize;
    this.loadEnquiries(event.pageIndex + 1);
  }

  goToPage(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.pagination.totalPages) {
      this.loadEnquiries(pageNumber);
    }
  }

  goToFirst() {
    this.loadEnquiries(1);
  }

  goToLast() {
    this.loadEnquiries(this.pagination.totalPages);
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  private showError(message: string) {
    this.error = message;
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    });
    this.isLoading = false;
  }
}