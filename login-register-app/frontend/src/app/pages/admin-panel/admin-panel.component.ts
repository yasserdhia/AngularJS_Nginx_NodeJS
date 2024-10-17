import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AdminPanelComponent implements OnInit {
  users: any[] = [];
  showUserForm = false;
  editMode = false;
  userForm = {
    id: null,
    name: '',
    email: '',
    password: '',
    profile_image: null
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get('/api/users').subscribe((data: any) => {
      this.users = data;
    });
  }

  showAddUserForm() {
    this.resetUserForm();
    this.showUserForm = !this.showUserForm; // التحكم في عرض النموذج باستخدام *ngIf
    this.editMode = false;
  }

  showEditUserForm(user: any) {
    this.userForm = { ...user, password: '' }; // تعيين كلمة المرور كفارغة عند التحديث
    this.showUserForm = true;
    this.editMode = true;
  }

  saveUser() {
    const formData = new FormData();
    formData.append('name', this.userForm.name);
    formData.append('email', this.userForm.email);
    formData.append('password', this.userForm.password);

    if (this.userForm.profile_image) {
      formData.append('profile_image', this.userForm.profile_image);
    }

    this.http.post('/api/users/add', formData).subscribe(
      () => {
        this.getUsers();
        this.showUserForm = false;
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }

  updateUser() {
    const formData = new FormData();
    formData.append('name', this.userForm.name);
    formData.append('email', this.userForm.email);

    if (this.userForm.profile_image) {
      formData.append('profile_image', this.userForm.profile_image);
    }

    this.http.put(`/api/users/edit/${this.userForm.id}`, formData).subscribe(
      () => {
        this.getUsers();
        this.showUserForm = false;
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }

  deleteUser(userId: number) {
    this.http.delete(`/api/users/delete/${userId}`).subscribe(
      () => {
        this.getUsers();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }

  cancelUserForm() {
    this.resetUserForm();
    this.showUserForm = false;
  }

  resetUserForm() {
    this.userForm = {
      id: null,
      name: '',
      email: '',
      password: '',
      profile_image: null
    };
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.userForm.profile_image = file;
    }
  }
}
