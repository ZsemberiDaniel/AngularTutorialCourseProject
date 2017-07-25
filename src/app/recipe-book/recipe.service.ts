import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

    private recipes: Recipe[] = [
      new Recipe(
        0,
        'Apple with pear',
        'This is an apple-pear inside a huge apple cake',
        'http://lifemadesimplebakes.com/wp-content/uploads/2015/09/Apple-Crisp-Crumb-Cake-2.jpg',
        [new Ingredient('apple', 10), new Ingredient('pear', 5), new Ingredient('cake', 1)]
      ),
      new Recipe(
        1,
        'Pineapple with pear',
        'A pineapple-pear inside a huge cake.',
        'http://cdn3-www.wholesomebabyfood.momtastic.com/assets/uploads/2015/04/pear-for-baby.jpg',
        [new Ingredient('pineapple', 3), new Ingredient('pear', 5), new Ingredient('cake', 1)]
      )
    ];

    constructor() { }

    removeRecipe(index: number) {
      this.recipes.splice(index, 1);
    }

    /**
     * Updates recipe at index to the given recipe.
     * @param recipe The updated recipe. It's id will be overriden
     * @param index Which recipe to update
     * @returns The recipe's id after overwriting
     */
    updateRecipe(recipe: Recipe, index: number): number {
      recipe.id = index;
      this.recipes[index] = recipe;

      return recipe.id;
    }

    /**
     * Adds a recipe at the given index. If the index is not given the recipe will be added to the end
     * The recipe id will be overriden.
     * @param recipe The recipe to be added
     * @param index Where to add.
     * @returns The recipe's id after overwriting
     */
    addRecipe(recipe: Recipe, index = this.recipes.length): number {
      recipe.id = index;
      this.recipes.splice(index, 0, recipe);

      return recipe.id;
    }

    getRecipes() { return this.recipes.slice(); }
    getRecipeWithId(id: number): Recipe | null {
      for (let recipe of this.recipes) {
        if (recipe.id === id) {
          return recipe;
        }
      }

      return null;
    }
}
