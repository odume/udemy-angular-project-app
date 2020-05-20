import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  private _recipes: Recipe[] = [
    new Recipe('Chicon gratin',
      'Typical belgian food',
      'https://live.staticflickr.com/7188/6784509998_d9bea4c973_b.jpg',
      [
        new Ingredient('Endive', 6),
        new Ingredient('Butter', 1),
        new Ingredient('Milk', 1),
        new Ingredient('Flour', 1),
        new Ingredient('Ham slice', 6),
        new Ingredient('Potato', 10)
      ]
    ),
    new Recipe('Big burger',
      'Big tasty burger with fries',
      'https://p0.pxfuel.com/preview/254/472/978/burgers-french-fries-french-beef.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Cheese', 1),
        new Ingredient('Buns', 2),
        new Ingredient('Onion', 1),
        new Ingredient('Tasty sauce', 1),
        new Ingredient('Fries', 20)
      ]
    )
  ];

  get recipes(): Recipe[] {
    return this._recipes.slice();
  }

  addIngredientsToShoppingList(recipe: Recipe) {
    this.shoppingListService.addIngredients(recipe.ingredients);
  }
}
