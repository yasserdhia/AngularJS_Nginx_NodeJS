import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap'; // استيراد NgbModal و NgbModule
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule] // إضافة NgbModule هنا
})
export class AdminPanelComponent implements OnInit {
  users: any[] = [];
  editMode = false;
  userForm = {
    id: null,
    name: '',
    email: '',
    password: '',
    profile_image: null
  };

  private scrollPosition = 0; // حفظ موضع التمرير

  constructor(private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get('/api/users').subscribe((data: any) => {
      this.users = data;
    });
  }

  // فتح النافذة المنبثقة لإضافة مستخدم
  showAddUserForm(content: any) {
    this.resetUserForm();
    this.editMode = false;
    this.scrollPosition = window.pageYOffset; // حفظ موضع التمرير
    document.body.style.overflow = 'hidden'; // منع التمرير عند فتح الـ modal
    this.modalService.open(content).result.finally(() => {
      document.body.style.overflow = 'auto'; // استعادة التمرير عند إغلاق الـ modal
      window.scrollTo(0, this.scrollPosition); // إعادة موضع التمرير
    });
  }

  // فتح النافذة المنبثقة لتعديل مستخدم
  showEditUserForm(user: any, content: any) {
    this.userForm = { ...user, password: '' };
    this.editMode = true;
    this.scrollPosition = window.pageYOffset; // حفظ موضع التمرير
    document.body.style.overflow = 'hidden'; // منع التمرير عند فتح الـ modal
    this.modalService.open(content).result.finally(() => {
      document.body.style.overflow = 'auto'; // استعادة التمرير عند إغلاق الـ modal
      window.scrollTo(0, this.scrollPosition); // إعادة موضع التمرير
    });
  }

  // حفظ المستخدم الجديد
  saveUser() {
    const formData = new FormData();
    formData.append('name', this.userForm.name);
    formData.append('email', this.userForm.email);
    formData.append('password', this.userForm.password);
    if (this.userForm.profile_image) {
      formData.append('profile_image', this.userForm.profile_image);
    }

    this.http.post('/api/users/add', formData).subscribe(() => {
      this.getUsers();
      window.scrollTo(0, this.scrollPosition); // إرجاع موضع التمرير بعد الإضافة
      this.modalService.dismissAll(); // إغلاق النافذة المنبثقة
    });
  }

  // تعديل المستخدم
  updateUser() {
    const formData = new FormData();
    formData.append('name', this.userForm.name);
    formData.append('email', this.userForm.email);
    if (this.userForm.profile_image) {
      formData.append('profile_image', this.userForm.profile_image);
    }

    this.http.put(`/api/users/edit/${this.userForm.id}`, formData).subscribe(() => {
      this.getUsers();
      window.scrollTo(0, this.scrollPosition); // إرجاع موضع التمرير بعد التعديل
      this.modalService.dismissAll(); // إغلاق النافذة المنبثقة
    });
  }

  // حذف المستخدم
  deleteUser(userId: number) {
    this.http.delete(`/api/users/delete/${userId}`).subscribe(() => {
      this.getUsers();
    });
  }

  // تغيير الملف الشخصي
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.userForm.profile_image = file;
    }
  }

  // إعادة تعيين النموذج
  resetUserForm() {
    this.userForm = {
      id: null,
      name: '',
      email: '',
      password: '',
      profile_image: null
    };
  }
}
