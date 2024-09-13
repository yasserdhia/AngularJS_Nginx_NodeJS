import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // استيراد FormsModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // إضافة FormsModule بشكل مباشر
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    
    if (this.email && this.password) {
      this.http.post('http://localhost:3000/login', { email: this.email, password: this.password })
        .subscribe(
          (response: any) => {
            alert('Login successful');
            localStorage.setItem('token', response.token);
          },
          (error) => {
            alert('Login failed');
          }
        );
    } else {
      alert('Please enter both email and password');
    }
  }
}
