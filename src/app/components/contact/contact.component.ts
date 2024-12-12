import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { ContactService, Contact, ApiResponse } from '../../services/contact.service';
import { FormsModule } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  displayedColumns: string[] = ['no', 'full_name', 'email', 'subject', 'mobilenumber', 'status', 'created_at'];
  dataSource: Contact[] = [];
  isLoading = true;
  totalRecords = 0;
  pageSize = 10;
  currentPage = 1;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Contact>;

  statusOptions = [
    { value: 'P', label: 'Pending' },
    { value: 'C', label: 'Completed' },
    { value: 'D', label: 'Declined' }
  ];

  constructor(
    private contactService: ContactService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts(page: number = 1) {
    this.isLoading = true;
    
    this.contactService.getAllContacts(page, this.pageSize)
      .subscribe({
        next: (response) => {
          this.dataSource = response.data;
          this.totalRecords = response.pagination.totalRecords;
          this.pageSize = response.pagination.pageSize; // Update pageSize from response
          this.isLoading = false;
          if (this.table) {
            this.table.renderRows();
          }
        },
        error: (error) => {
          console.error('Error loading contacts:', error);
          this.isLoading = false;
        }
      });
  }


  getStatusColor(status: string): string {
    switch (status) {
      case 'C': return 'primary';
      case 'D': return 'warn';
      default: return 'accent';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'C': return 'Completed';
      case 'D': return 'Declined';
      default: return 'Pending';
    }
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

  
  hasPreviousPage(): boolean {
    return this.currentPage > 1;
  }

  hasNextPage(): boolean {
    return this.currentPage < this.getTotalPages();
  }

  getTotalPages(): number {
    return Math.ceil(this.totalRecords / this.pageSize);
  }

  previousPage(): void {
    if (this.hasPreviousPage()) {
      this.goToPage(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.hasNextPage()) {
      this.goToPage(this.currentPage + 1);
    }
  }

  goToFirst(): void {
    this.goToPage(1);
  }

  goToLast(): void {
    this.goToPage(this.getTotalPages());
  }

  goToPage(page: number): void {
    const totalPages = this.getTotalPages();
    if (page >= 1 && page <= totalPages) {
      this.currentPage = page;
      this.loadContacts(page);
    }
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex + 1;
    this.loadContacts(this.currentPage);
  }

  onStatusChange(id: string, newStatus: string): void {
    this.contactService.updateContactStatus(id, newStatus).subscribe({
      next: (response) => {
        this.snackBar.open(response.message, 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['success-snackbar']
        });
        this.loadContacts(this.currentPage);
      },
      error: (error) => {
        this.snackBar.open('Failed to update status', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['error-snackbar']
        });
      }
    });
  }
}