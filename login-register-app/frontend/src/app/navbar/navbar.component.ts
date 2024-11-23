import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  user: any = {
    name: 'Guest',
    profile_image: '/assets/default-avatar.png'
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getUserStatus().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
      if (this.isLoggedIn) {
        this.authService.getUserProfile().subscribe((userData: any) => {
          this.user = {
            name: userData.name || 'Guest',
            profile_image: userData.profile_image || '/assets/default-avatar.png'
          };
        });
      }
    });
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.user = {
      name: 'Guest',
      profile_image: '/assets/default-avatar.png'
    };
    this.router.navigate(['/login/strategy1']);
  }
}
