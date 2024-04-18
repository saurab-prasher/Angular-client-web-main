import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import {
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogPageComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    FormsModule,
    FooterComponent,
    AboutUsComponent,
    ContactComponent,
    NavbarComponent,
    HerosectionComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Nutriserve';
}
