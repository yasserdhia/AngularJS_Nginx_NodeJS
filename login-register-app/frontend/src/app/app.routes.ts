import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsersComponent } from './users/users.component'; // استيراد مكون UsersComponent
import { TestPageComponent } from './test-page/test-page.component'; // استيراد مكون الاختبار
import { ProfileComponent } from './profile/profile.component'; // استيراد مكون صفحة البروفايل
import { AuthGuard } from './guards/auth.guard'; // استيراد الحارس من المجلد الجديد

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent },
  { path: 'test', component: TestPageComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }, // حماية صفحة الملف الشخصي بالحارس
  { path: '**', redirectTo: 'login' }
];
