import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { environment } from '../environments/environment';

// Import components based on their strategy folders
import { LoginStrategy1Component } from './pages/login/strategy1/login-strategy1.component';
import { RegisterStrategy1Component } from './pages/register/strategy1/register-strategy1.component';
import { ProfileStrategy1Component } from './pages/profile/strategy1/profile-strategy1.component';
import { ForgotPasswordStrategy1Component } from './pages/forgot-password/strategy1/forgot-password-strategy1.component';
import { ResetPasswordStrategy1Component } from './pages/reset-password/strategy1/reset-password-strategy1.component';

// Define routes for different strategies
export const routes: Routes = [
  { path: '', redirectTo: `login/${environment.strategyLogin}`, pathMatch: 'full' },
  { path: `login/${environment.strategyLogin}`, component: LoginStrategy1Component },
  { path: `register/${environment.strategyRegister}`, component: RegisterStrategy1Component },
  
  // Apply the AuthGuard to the following routes to protect them
  { path: `profile/${environment.strategyProfile}`, component: ProfileStrategy1Component, canActivate: [AuthGuard] },
  { path: `forgot-password/${environment.strategyForgotPassword}`, component: ForgotPasswordStrategy1Component },
  { path: `reset-password/${environment.strategyResetPassword}`, component: ResetPasswordStrategy1Component },
  
  // Wild-card route to redirect to login
  { path: '**', redirectTo: `login/${environment.strategyLogin}` }
];
