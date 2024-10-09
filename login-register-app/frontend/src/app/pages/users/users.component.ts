import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule], // تأكد من إضافة CommonModule للاستخدام مع *ngFor و *ngIf
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = []; // لتعريف المتغير الخاص بالمستخدمين
  products: any[] = []; // لتعريف المتغير الخاص بالمنتجات

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // جلب بيانات المستخدمين من الـ API عند تحميل الصفحة
    this.http.get('/api/users').subscribe((data: any) => {
      console.log("Fetched users: ", data); // للتأكد من جلب بيانات المستخدمين
      this.users = data;
    });

    // جلب بيانات المنتجات من الـ API عند تحميل الصفحة
    this.http.get('/api/products').subscribe((data: any) => {
      console.log("Fetched products: ", data); // للتأكد من جلب بيانات المنتجات
      this.products = data;
    });
  }
}
