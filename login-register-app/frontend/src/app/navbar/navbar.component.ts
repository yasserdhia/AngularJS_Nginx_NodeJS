import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // لإضافة CommonModule
import { AuthService } from '../services/auth.service'; // استيراد خدمة التحقق من تسجيل الدخول

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], // إضافة CommonModule لتفعيل *ngIf
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  user: any = {
    name: '',
    profile_image: ''
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // التحقق من حالة تسجيل الدخول
    this.authService.getUserStatus().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;

      if (this.isLoggedIn) {
        // جلب بيانات المستخدم عند تسجيل الدخول
        this.authService.getUserProfile().subscribe((userData: any) => {
          this.user = userData;
        });
      } else {
        // تعيين القيم الافتراضية للمستخدم الزائر
        this.user = {
          name: 'Guest',
          profile_image: 'assets/default-profile.png'
        };
      }
    });
  }

  logout() {
    this.authService.logout(); // استدعاء الدالة لتسجيل الخروج
    this.isLoggedIn = false;
    // تعيين القيم الافتراضية بعد تسجيل الخروج
    this.user = {
      name: 'Guest',
      profile_image: 'assets/default-profile.png'
    };
  }
}
