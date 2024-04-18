import { Routes } from '@angular/router';
import { MealsComponent } from './components/meals/meals.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogPageComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PlanComponent } from './plan/plan.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';

export const routes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: '', component: HerosectionComponent },
  { path: 'meals', component: MealsComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'checkout', component: CheckoutPageComponent },
];
