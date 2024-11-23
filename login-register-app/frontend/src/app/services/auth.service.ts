import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost/api'; // URL الخاص بالـ backend

  constructor(private http: HttpClient) {}

  // فحص حالة تسجيل الدخول
  getUserStatus() {
    const isLoggedIn = !!localStorage.getItem('token');
    return of(isLoggedIn);
  }

  // جلب بيانات المستخدم
  getUserProfile() {
    // هنا يتم جلب بيانات المستخدم من الـ backend باستخدام التوكن المخزن
    return this.http.get<any>(`${this.apiUrl}/user/profile`);
  }

  // تسجيل الخروج
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
