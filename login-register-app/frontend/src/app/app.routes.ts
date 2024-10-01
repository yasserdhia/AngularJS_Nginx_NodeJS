import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './profile/profile.component'; // استيراد مكون صفحة البروفايل
import { AuthGuard } from './guards/auth.guard'; // استيراد الحارس من المجلد الجديد
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component'; // استيراد مكون "نسيت كلمة المرور"
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component'; // استيراد مكون إعادة تعيين كلمة المرور

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }, // حماية صفحة الملف الشخصي بالحارس
  { path: 'forgot-password', component: ForgotPasswordComponent }, // صفحة "نسيت كلمة المرور"
  { path: 'reset-password', component: ResetPasswordComponent }, // صفحة إعادة تعيين كلمة المرور
  { path: '**', redirectTo: 'login' }
];
