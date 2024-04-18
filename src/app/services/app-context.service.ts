import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.models';
import { Meal } from '../models/meal.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppContextService {
  private serverUrl =
    'https://nutriserve-server-git-main-saurab-prashers-projects.vercel.app';
  private loggedInUser = new BehaviorSubject<User | null>(null);
  loggedInUser$ = this.loggedInUser.asObservable();

  private selectedRecipes = new BehaviorSubject<Meal[]>([]);
  selectedRecipes$ = this.selectedRecipes.asObservable();

  private likedRecipes = new BehaviorSubject<string[]>([]);
  likedRecipes$ = this.likedRecipes.asObservable();

  constructor(private http: HttpClient) {}

  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    return this.http
      .post<User>(`${this.serverUrl}/users/register`, {
        firstName,
        lastName,
        email,
        password,
      })
      .toPromise()
      .then((user) => {
        this.loggedInUser.next(user);
        return user;
      });
  }

  addSelectedMeal(meal: Meal) {
    const currentMeals = this.selectedRecipes.value;
    if (!currentMeals.some((m) => m._id === meal._id)) {
      this.selectedRecipes.next([...currentMeals, meal]);
    }
  }

  removeSelectedMeal(id: string) {
    this.selectedRecipes.next(
      this.selectedRecipes.value.filter((meal) => meal._id !== id)
    );
  }

  likeMeal(mealId: string) {
    const currentLikes = this.likedRecipes.value;
    if (!currentLikes.includes(mealId)) {
      this.likedRecipes.next([...currentLikes, mealId]);
    }
  }
}
