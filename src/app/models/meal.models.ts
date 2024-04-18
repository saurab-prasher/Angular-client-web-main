interface NutritionalValues {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
}

export interface Meal {
  _id: string;
  name: string;
  description: string;
  category: string;
  ingredients: string[];
  mealType: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
  nutritionalValues: NutritionalValues;
  imageUrl?: string;
}
