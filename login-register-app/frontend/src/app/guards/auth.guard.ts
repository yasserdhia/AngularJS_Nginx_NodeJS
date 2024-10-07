import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      // Decode token and check for expiration
      try {
        const decodedToken: any = jwtDecode(token);
        const expirationDate = new Date(decodedToken.exp * 1000); // Convert to milliseconds

        // Check if token is expired
        if (expirationDate > new Date()) {
          return true; // Allow access
        } else {
          this.router.navigate(['/login']); // Token expired, redirect to login
          return false;
        }
      } catch (error) {
        // Invalid token format, redirect to login
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      this.router.navigate(['/login']); // No token found, redirect to login
      return false;
    }
  }
}
