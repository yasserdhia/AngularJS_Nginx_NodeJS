import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router'; // Import Router and RouterModule
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-strategy1', // Update selector name to be specific to strategy1
  standalone: true,
  imports: [FormsModule, RouterModule], // Import RouterModule for navigation
  templateUrl: './login-strategy1.component.html',
  styleUrls: ['./login-strategy1.component.css']
})
export class LoginStrategy1Component { // Update class name to be specific to strategy1
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

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
            // Navigate to profile strategy1 page
            this.router.navigate(['/profile/strategy1']); 
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
