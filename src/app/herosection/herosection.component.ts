import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-herosection',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.css',
})
export class HerosectionComponent {}
