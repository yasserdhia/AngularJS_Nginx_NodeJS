import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'; // استيراد SweetAlert2

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
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
            Swal.fire({
              title: 'Login Successful!',
              text: 'You have successfully logged in.',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500, // الرسالة تختفي بعد 1.5 ثانية
              position: 'center' // تعديل الموقع ليكون في منتصف الصفحة
            });
            localStorage.setItem('token', response.token);
          },
          (error) => {
            Swal.fire({
              title: 'Error!',
              text: 'Invalid credentials. Please try again.',
              icon: 'error',
              confirmButtonText: 'Retry',
              position: 'center' // تعديل الموقع ليكون في منتصف الصفحة
            });
          }
        );
    } else {
      Swal.fire({
        title: 'Incomplete Details',
        text: 'Please enter both email and password',
        icon: 'warning',
        confirmButtonText: 'OK',
        position: 'center' // تعديل الموقع ليكون في منتصف الصفحة
      });
    }
  }
}
