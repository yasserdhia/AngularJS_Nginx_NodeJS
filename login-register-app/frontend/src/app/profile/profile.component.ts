import { Component , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [FormsModule]
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
        // تعيين صورة افتراضية إذا لم تكن متاحة
        if (!this.user.profile_image) {
          this.user.profile_image = 'assets/default-profile.png';
        }
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
        // إذا تم رفع صورة جديدة، قم بتحديث رابط الصورة
        if (response.profile_image) {
          this.user.profile_image = response.profile_image;
        }
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
