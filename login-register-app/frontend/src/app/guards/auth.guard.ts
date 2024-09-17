import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true; // السماح بالوصول إلى الصفحة
    } else {
      this.router.navigate(['/login']); // إعادة التوجيه إلى صفحة تسجيل الدخول
      return false;
    }
  }
}
