import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password-strategy1',
  templateUrl: './reset-password-strategy1.component.html',
  styleUrls: ['./reset-password-strategy1.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class ResetPasswordStrategy1Component {
  token: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      this.email = params['email'];
    });
  }

  resetPassword() {
    this.http.post('/api/reset-password', { token: this.token, email: this.email, password: this.password }).subscribe(
      () => {
        alert('Password reset successful');
      },
      (error) => {
        console.error('Error resetting password', error);
      }
    );
  }
}
