import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // استيراد FormsModule
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  standalone: true, // تأكد من أنك تستخدم standalone هنا
  imports: [FormsModule] // إضافة FormsModule في المكون
})
export class ResetPasswordComponent {
  token: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    // قراءة الرمز والبريد الإلكتروني من رابط إعادة التعيين
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      this.email = params['email'];
    });
  }

  resetPassword() {
    this.http.post('/api/reset-password', { token: this.token, email: this.email, password: this.password }).subscribe(
      () => {
        alert('تم إعادة تعيين كلمة المرور بنجاح');
      },
      (error) => {
        console.error('Error resetting password', error);
      }
    );
  }
}
