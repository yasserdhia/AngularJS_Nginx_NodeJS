import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsersComponent } from './users/users.component'; // استيراد مكون UsersComponent
import { TestPageComponent } from './test-page/test-page.component'; // استيراد مكون الاختبار

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, // تحميل LoginComponent بشكل مباشر
  { path: 'register', component: RegisterComponent }, // تحميل RegisterComponent بشكل مباشر
  { path: 'users', component: UsersComponent }, // إضافة مسار UsersComponent
  { path: 'test', component: TestPageComponent }, // إضافة المسار
  { path: '**', redirectTo: 'login' }, // إعادة توجيه أي مسار غير معروف إلى صفحة login
  { path: '**', redirectTo: 'test' } // إعادة التوجيه إلى صفحة الاختبار بشكل افتراضي
];
