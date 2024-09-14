import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'; // استيراد SweetAlert2

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  register() {
    if (this.name && this.email && this.password) {
      this.http.post('http://localhost:3000/register', { name: this.name, email: this.email, password: this.password })
        .subscribe(
          () => {
            Swal.fire({
              title: 'Registration Successful!',
              text: 'Your account has been created.',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500, // الرسالة تختفي بعد 1.5 ثانية
              position: 'center' // تعديل الموقع ليكون في منتصف الصفحة
            });
          },
          (error) => {
            Swal.fire({
              title: 'Error!',
              text: 'Registration failed. Please try again.',
              icon: 'error',
              confirmButtonText: 'Retry',
              position: 'center' // تعديل الموقع ليكون في منتصف الصفحة
            });
          }
        );
    } else {
      Swal.fire({
        title: 'Incomplete Details',
        text: 'Please fill in all fields',
        icon: 'warning',
        confirmButtonText: 'OK',
        position: 'center' // تعديل الموقع ليكون في منتصف الصفحة
      });
    }
  }
}
