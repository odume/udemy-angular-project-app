import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Recipe simply for testing the app',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg'),
    new Recipe('A dummy recipe', 'this is a second dummy recipe for testing',
      'http://www.cookuk.co.uk/images/children_spaghetti_face/children-recipe-pic1-smaller.gif')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(selectedRecipe: Recipe) {
    this.recipeSelected.emit(selectedRecipe);
  }
}
