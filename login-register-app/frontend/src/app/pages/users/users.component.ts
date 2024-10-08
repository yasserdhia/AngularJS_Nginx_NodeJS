import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule], // تأكد من إضافة CommonModule للاستخدام مع *ngFor و *ngIf
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'] // تأكد من أن الكلمة بصيغة الجمع styleUrls
})
export class UsersComponent implements OnInit {
  users: any[] = []; // لتعريف المتغير الخاص بالمستخدمين

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // جلب بيانات المستخدمين من الـ API عند تحميل الصفحة
    this.http.get('/api/users').subscribe((data: any) => {
      this.users = data; // تخزين البيانات في المتغير users
    });
  }
}
