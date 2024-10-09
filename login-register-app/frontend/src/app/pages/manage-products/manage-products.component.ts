import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: any[] = [];
  newProduct = {
    title: '',
    price: 0,
    image: null
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // جلب المنتجات من الـ API عند تحميل الصفحة
    this.http.get('/api/products').subscribe((data: any) => {
      this.products = data;
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.newProduct.image = file;
  }

  addProduct() {
    const formData = new FormData();
    formData.append('title', this.newProduct.title);
    formData.append('price', this.newProduct.price.toString());
    if (this.newProduct.image) {
      formData.append('image', this.newProduct.image);
    }

    this.http.post('/api/products', formData).subscribe((response) => {
      console.log('Product added successfully', response);
      // تحديث القائمة بعد إضافة المنتج
      this.ngOnInit();
    });
  }

  deleteProduct(productId: number) {
    this.http.delete(`/api/products/${productId}`).subscribe((response) => {
      console.log('Product deleted successfully', response);
      // تحديث القائمة بعد حذف المنتج
      this.ngOnInit();
    });
  }
}
