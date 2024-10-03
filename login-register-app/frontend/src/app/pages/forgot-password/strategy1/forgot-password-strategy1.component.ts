import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password-strategy1',
  templateUrl: './forgot-password-strategy1.component.html',
  styleUrls: ['./forgot-password-strategy1.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class ForgotPasswordStrategy1Component {
  email: string = '';

  constructor(private http: HttpClient) {}

  sendResetLink() {
    this.http.post('/api/forgot-password', { email: this.email }).subscribe(
      () => {
        alert('A password reset link has been sent to your email.');
      },
      (error) => {
        console.error('Error sending reset link', error);
      }
    );
  }
}
