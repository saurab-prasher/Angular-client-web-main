import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink],
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  loggedInUser: any;
  isHovered = false;

  currentUser: any = null;
  private authSubscription!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {
    this.authService.loggedInUser.subscribe((user) => {
      this.currentUser = user;

      this.cdRef.detectChanges(); // Manually trigger change detection
    });
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => console.error('Error logging out', err),
    });
  }
}
