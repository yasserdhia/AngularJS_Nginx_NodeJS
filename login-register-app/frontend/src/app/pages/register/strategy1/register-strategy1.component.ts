import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-strategy1',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register-strategy1.component.html',
  styleUrls: ['./register-strategy1.component.css']
})
export class RegisterStrategy1Component {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  register() {
    if (this.name && this.email && this.password) {
      this.http.post('/api/register', { name: this.name, email: this.email, password: this.password })
        .subscribe(
          () => {
            Swal.fire({
              title: 'Registration Successful!',
              text: 'Your account has been created.',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
              position: 'center'
            });
          },
          (error) => {
            Swal.fire({
              title: 'Error!',
              text: 'Registration failed. Please try again.',
              icon: 'error',
              confirmButtonText: 'Retry',
              position: 'center'
            });
          }
        );
    } else {
      Swal.fire({
        title: 'Incomplete Details',
        text: 'Please fill in all fields',
        icon: 'warning',
        confirmButtonText: 'OK',
        position: 'center'
      });
    }
  }
}
