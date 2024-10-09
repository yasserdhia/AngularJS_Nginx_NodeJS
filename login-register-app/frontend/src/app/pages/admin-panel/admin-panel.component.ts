import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  users: any[] = [];
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
    this.getProducts();
  }

  getUsers() {
    this.http.get('/api/users').subscribe((data: any) => {
      this.users = data;
    });
  }

  getProducts() {
    this.http.get('/api/products').subscribe((data: any) => {
      this.products = data;
    });
  }

  // وظائف لإضافة، تعديل، حذف المستخدمين
  addUser() { /* Function to add a user */ }
  editUser(user: any) { /* Function to edit a user */ }
  deleteUser(userId: number) { /* Function to delete a user */ }

  // وظائف لإضافة، تعديل، حذف المنتجات
  addProduct() { /* Function to add a product */ }
  editProduct(product: any) { /* Function to edit a product */ }
  deleteProduct(productId: number) { /* Function to delete a product */ }
}
