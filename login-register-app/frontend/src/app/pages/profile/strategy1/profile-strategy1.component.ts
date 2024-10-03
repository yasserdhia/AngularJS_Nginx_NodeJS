import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-strategy1',
  templateUrl: './profile-strategy1.component.html',
  styleUrls: ['./profile-strategy1.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ProfileStrategy1Component implements OnInit {
  user: any = {};
  selectedFile: File | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login/strategy1']);
      return;
    }
  
    this.http.get('/api/profile', {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe(
      (response: any) => {
        this.user = response;
  
        if (this.user.profile_image && !this.user.profile_image.startsWith('http')) {
          this.user.profile_image = `http://localhost:3000/uploads/${this.user.profile_image}`;
        }
  
        if (!this.user.profile_image) {
          this.user.profile_image = 'assets/default-profile.png';
        }
      },
      (error) => {
        console.error('Error fetching profile', error);
        this.router.navigate(['/login/strategy1']);
      }
    );
  }

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
        alert('Profile updated successfully');
        if (response.profile_image) {
          this.user.profile_image = response.profile_image;
        }
      },
      (error) => {
        console.error('Error updating profile', error);
      }
    );
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }
}
