import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // استيراد FormsModule
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  standalone: true, // تأكد من أنك تستخدم standalone هنا
  imports: [FormsModule] // إضافة FormsModule في المكون
})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(private http: HttpClient) {}

  sendResetLink() {
    this.http.post('/api/forgot-password', { email: this.email }).subscribe(
      () => {
        alert('تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني');
      },
      (error) => {
        console.error('Error sending reset link', error);
      }
    );
  }
}
