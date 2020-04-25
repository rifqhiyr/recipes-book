import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output('recipelistoutput') recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'steak',
      'Chicken steak with tomatoes sauce',
      'https://c.pxhere.com/images/15/3d/9ee477ee62341b9480ce314b02f8-1417897.jpg!d'
    ),
    new Recipe(
      'Pasta',
      'Delicious pasta with meat topping',
      'https://c4.wallpaperflare.com/wallpaper/557/8/980/food-pasta-basil-olives-wallpaper-preview.jpg'
    ),
    new Recipe(
      'Pizza',
      'Mozarella Pizza with sausage topping',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4sqaI8jFiGrfJ_mo-BzP53fjultNvIS3PpygDl6bRnIHcnc5P&s'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
