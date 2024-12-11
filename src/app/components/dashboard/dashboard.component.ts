import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Material Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

// Services and Models
import { AuthService } from '../../services/auth.service';
import { EnquiryService } from '../../services/enquiry.service';
import { Enquiry } from '../../models/enquiry.model';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    HeaderComponent
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // Table Configuration
  selectedTabIndex = 0;
  displayedColumns: string[] = ['id', 'name', 'company_name', 'email', 'mobilenumber', 'created_at', 'actions'];
  dataSource: MatTableDataSource<Enquiry>;

  // View Child Decorators
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Dashboard Statistics
  totalEnquiries = 0;
  pendingEnquiries = 0;
  completedEnquiries = 0;

  constructor(
    private authService: AuthService,
    private enquiryService: EnquiryService,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource<Enquiry>([]);
  }

  ngOnInit(): void {
    this.loadEnquiries();
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadEnquiries(): void {
    this.enquiryService.getEnquiries()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (enquiries: Enquiry[]) => {
          console.log('Received enquiries:', enquiries);
          this.dataSource.data = enquiries;
          this.calculateStatistics(enquiries);
          
          // Initialize sort and paginator after data is loaded
          if (this.sort && this.paginator) {
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          }
        },
        error: (error) => {
          console.error('Error loading enquiries', error);
          // TODO: Add user-friendly error handling
        }
      });
  }

  calculateStatistics(enquiries: Enquiry[]): void {
    this.totalEnquiries = enquiries.length;
    // Since we don't have status in the API response, we'll set these to 0
    this.pendingEnquiries = 0;
    this.completedEnquiries = 0;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewDetails(enquiry: Enquiry): void {
    // TODO: Implement view details modal or navigation
    console.log('View details for:', enquiry);
  }

  onTabChange(index: number): void {
    this.selectedTabIndex = index;
  }

  logout(): void {
    this.authService.logout()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => this.router.navigate(['/login']),
        error: (error) => console.error('Logout failed', error)
      });
  }
}