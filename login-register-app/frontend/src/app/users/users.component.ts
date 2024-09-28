import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // استيراد HttpClient
import { CommonModule } from '@angular/common'; // لاستخدام الدوال الأساسية مثل *ngFor

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule], // إضافة CommonModule لاستخدام *ngFor
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'] // تأكد من استخدام styleUrls بصيغة الجمع
})
export class UsersComponent implements OnInit {
  users: any[] = []; // لتخزين قائمة المستخدمين

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // طلب البيانات من خادم Node.js
    this.http.get('/api/users')
      .subscribe((data: any) => {
        this.users = data; // تخزين البيانات المسترجعة
      }, error => {
        console.error('Error fetching users:', error);
      });
  }
}
