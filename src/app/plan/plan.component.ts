import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})
export class PlanComponent implements OnInit {
  numberOfPeople = 2;
  recipesPerWeek = 3;
  totalPrice = 0;
  pricePerServing = 0;
  shippingPrice = 0;

  constructor() {}

  ngOnInit(): void {}

  setNumberOfPeople(value: number) {
    this.numberOfPeople = value;
    this.calculateTotalPrice();
  }

  setRecipesPerWeek(value: number) {
    this.recipesPerWeek = value;
    this.replacePricingPlan();
    this.calculateTotalPrice();
  }

  replacePricingPlan() {
    // TODO: Fetch the new pricing plan data from the backend
    // Replace the current pricing plan with the new one
  }

  calculateTotalPrice() {
    // TODO: Calculate the new total price based on the new number of people and recipes per week
    this.totalPrice = 135.89;
    this.pricePerServing =
      this.totalPrice / (this.numberOfPeople * this.recipesPerWeek);
    this.shippingPrice = 7.99;
  }
}
