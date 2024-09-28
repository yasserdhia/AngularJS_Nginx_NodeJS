import { Component , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // استيراد FormsModule إذا كنت تستخدم standalone
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,  // تأكد من أنك تستخدم standalone هنا
  imports: [FormsModule]  // إضافة FormsModule هنا في المكون نفسه
})

export class ProfileComponent implements OnInit {
  user: any = {};
  selectedFile: File | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }

    this.http.get('/api/profile', {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe(
      (response: any) => {
        this.user = response;
      },
      (error) => {
        console.error('Error fetching profile', error);
        this.router.navigate(['/login']);
      }
    );
  }

  // تحديث البيانات الشخصية
  updateProfile(): void {
    const formData = new FormData();
    formData.append('name', this.user.name);
    formData.append('email', this.user.email);

    if (this.user.password) {
      formData.append('password', this.user.password);
    }

    if (this.selectedFile) {
      formData.append('profileImage', this.selectedFile);
    }

    const token = localStorage.getItem('token');
    this.http.post('/api/profile/update', formData, {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe(
      (response: any) => {
        alert('تم تحديث البيانات بنجاح');
      },
      (error) => {
        console.error('Error updating profile', error);
      }
    );
  }

  // تحميل الصورة الشخصية
  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }
}