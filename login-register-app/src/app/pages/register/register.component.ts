import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // تأكد من استيراد FormsModule

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule], // إضافة FormsModule هنا
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  register() {
    // إرسال طلب POST إلى Node.js
    this.http.post('http://localhost:3000/register', { name: this.name, email: this.email, password: this.password })
      .subscribe(
        () => alert('Registration successful'),
        (error) => alert('Registration failed')
      );
  }
}
