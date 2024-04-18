import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  error: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService
      .register(this.email, this.password, this.firstName, this.lastName)
      .subscribe({
        next: () => {
          // Handle response
        },
        error: (err) => {
          this.error = `Failed to register: ${err.error?.error || err.message}`;
          console.error(this.error);
        },
      });
  }
}
