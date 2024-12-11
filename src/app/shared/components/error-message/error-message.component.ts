import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="message" class="error-message">
      {{ message }}
    </div>
  `,
  styles: [`
    .error-message {
      color: #dc3545;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }
  `]
})
export class ErrorMessageComponent {
  @Input() message: string = '';
}