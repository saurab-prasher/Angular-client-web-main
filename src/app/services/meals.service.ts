// meal.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NutritionalValues {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
}

export interface Meal {
  nutritionalValues: NutritionalValues;
  _id: string;
  name: string;
  description: string;
  category: string;
  ingredients: string[];
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class MealService {
  private apiUrl =
    'https://nutriserve-server-git-main-saurab-prashers-projects.vercel.app/api/meals';

  constructor(private http: HttpClient) {}

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.apiUrl);
  }
}
