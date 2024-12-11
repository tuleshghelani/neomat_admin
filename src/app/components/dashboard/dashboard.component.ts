import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { EnquiryService } from '../../services/enquiry.service';
import { Enquiry } from '../../models/enquiry.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentTab = 'enquiry';
  enquiries: Enquiry[] = [];

  constructor(
    private authService: AuthService,
    private enquiryService: EnquiryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadEnquiries();
  }

  setTab(tab: string) {
    this.currentTab = tab;
    if (tab === 'enquiry') {
      this.loadEnquiries();
    }
  }

  loadEnquiries() {
    this.enquiryService.getEnquiries().subscribe({
      next: (data) => {
        this.enquiries = data;
      },
      error: (error) => {
        console.error('Error loading enquiries:', error);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}