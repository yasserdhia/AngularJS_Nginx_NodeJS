import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // استيراد RouterModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule], // إضافة RouterModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  login() {
    if (this.email && this.password) {
      this.http.post('http://localhost:3000/login', { email: this.email, password: this.password })
        .subscribe(
          (response: any) => {
            alert('Login successful');
            localStorage.setItem('token', response.token);
          },
          (error) => {
            if (error.status === 401) {
              alert('Invalid credentials');
            } else {
              alert('Login failed');
            }
          }
        );
    } else {
      alert('Please enter both email and password');
    }
  }
}
