import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router'; // استيراد Router و RouterModule
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule], // إضافة RouterModule هنا للتأكد من عمل التوجيه
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {} // إضافة Router في الكونستركتور

  login() {
    if (this.email && this.password) {
      this.http.post('/api/login', { email: this.email, password: this.password })
        .subscribe(
          (response: any) => {
            Swal.fire({
              title: 'Login Successful!',
              text: 'You have successfully logged in.',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
              position: 'center'
            });
            localStorage.setItem('token', response.token);
            this.router.navigate(['/profile']); // التوجيه إلى صفحة الملف الشخصي بعد تسجيل الدخول
          },
          (error) => {
            Swal.fire({
              title: 'Error!',
              text: 'Invalid credentials. Please try again.',
              icon: 'error',
              confirmButtonText: 'Retry',
              position: 'center'
            });
          }
        );
    } else {
      Swal.fire({
        title: 'Incomplete Details',
        text: 'Please enter both email and password',
        icon: 'warning',
        confirmButtonText: 'OK',
        position: 'center'
      });
    }
  }
}
