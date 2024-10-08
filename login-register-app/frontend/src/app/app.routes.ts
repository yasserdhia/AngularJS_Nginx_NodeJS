import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { environment } from '../environments/environment';

// Import components for menu navigation
import { HomeComponent } from './pages/home/home.component';
import { LoginStrategy1Component } from './pages/login/strategy1/login-strategy1.component';
import { RegisterStrategy1Component } from './pages/register/strategy1/register-strategy1.component';
import { ProfileStrategy1Component } from './pages/profile/strategy1/profile-strategy1.component';
import { ForgotPasswordStrategy1Component } from './pages/forgot-password/strategy1/forgot-password-strategy1.component';
import { ResetPasswordStrategy1Component } from './pages/reset-password/strategy1/reset-password-strategy1.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component'; // استيراد مكون صفحة المستخدمين


// Define routes for different strategies and new components
export const routes: Routes = [
  { path: '', redirectTo: `home`, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: `login/${environment.strategyLogin}`, component: LoginStrategy1Component },
  { path: `register/${environment.strategyRegister}`, component: RegisterStrategy1Component },
  
  // Apply the AuthGuard to the following routes to protect them
  { path: `profile/${environment.strategyProfile}`, component: ProfileStrategy1Component, canActivate: [AuthGuard] },
  { path: `forgot-password/${environment.strategyForgotPassword}`, component: ForgotPasswordStrategy1Component },
  { path: `reset-password/${environment.strategyResetPassword}`, component: ResetPasswordStrategy1Component },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent }, // إضافة مسار صفحة المستخدمين
  
  // Wild-card route to redirect to home
  { path: '**', redirectTo: `home` }
];
