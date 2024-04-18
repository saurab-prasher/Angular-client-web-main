import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  handleChange(event: any): void {
    const { name, value } = event.target;
    this.formData = { ...this.formData, [name]: value };
  }

  async handleSubmit(event: Event): Promise<void> {
    event.preventDefault();
    try {
      const response = await this.http.post('http://localhost:5000/contact', this.formData).toPromise();
      if (response) {
        alert('Thank you for contacting us!');
        this.formData = {
          name: '',
          email: '',
          message: ''
        };
      }
    } catch (error) {
      console.error('Failed to submit message:', error);
      alert('Failed to submit message. Please try again later.');
    }
  }
}
