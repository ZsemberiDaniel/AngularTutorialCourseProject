import { FirebaseServerService } from './../shared/firebase-server.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [];

    constructor(private firebaseServer: FirebaseServerService) {
      // get recipes from server
      this.firebaseServer.getRecipes().subscribe(
        (recipes: any[]) => {
          this.recipes = recipes ? recipes : [];
        }
      );
    }

    removeRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.storeRecipes();
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

      this.storeRecipes();
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

      this.storeRecipes();
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

    /**
     * Stores recipes on the firebase server
     */
    private storeRecipes() {
      this.firebaseServer.storeRecipes(this.recipes).subscribe(
        (resposne) => console.log(resposne),
        (error) => console.log(error)
      );
    }
}
