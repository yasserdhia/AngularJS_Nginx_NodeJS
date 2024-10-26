import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // فحص حالة تسجيل الدخول
  getUserStatus() {
    const isLoggedIn = !!localStorage.getItem('token'); // افتراض تسجيل الدخول بناءً على وجود التوكن
    return of(isLoggedIn);
  }

  // جلب بيانات المستخدم (في هذه الحالة يمكن تخزينها في الذاكرة أو استرجاعها من الـ localStorage)
  getUserProfile() {
    const user = {
      name: 'John Doe',
      profile_image: 'assets/profile-image.png'
    };
    return of(user);
  }

  // تسجيل الخروج
  logout() {
    localStorage.removeItem('token');
  }
}
