import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
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
}
