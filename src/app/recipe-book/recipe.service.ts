import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

    onRecipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
      new Recipe(
        'Apple with pear',
        'This is an apple-pear inside a huge apple cake',
        'http://lifemadesimplebakes.com/wp-content/uploads/2015/09/Apple-Crisp-Crumb-Cake-2.jpg',
        [new Ingredient('apple', 10), new Ingredient('pear', 5), new Ingredient('cake', 1)]
      ),
      new Recipe(
        'Pineapple with pear',
        'A pineapple-pear inside a huge cake.',
        'http://cdn3-www.wholesomebabyfood.momtastic.com/assets/uploads/2015/04/pear-for-baby.jpg',
        [new Ingredient('pineapple', 3), new Ingredient('pear', 5), new Ingredient('cake', 1)]
      )
    ];

    private _selectedRecipe: Recipe = this.recipes[0];
    get selectedRecipe(): Recipe { return this._selectedRecipe; }

    constructor() {
        this.onRecipeSelected.subscribe(
            recipe => this._selectedRecipe = recipe
        );
    }

    getRecipes() { return this.recipes.slice(); }
}
