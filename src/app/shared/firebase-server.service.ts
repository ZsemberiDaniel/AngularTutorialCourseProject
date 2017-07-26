import { AuthService } from './../auth/auth.service';
import { Ingredient } from './ingredient.model';
import { Recipe } from './../recipe-book/recipe.model';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class FirebaseServerService {

    private URL = 'https://ng-recipe-tutorial.firebaseio.com/';
    private recipeJSON = 'recipes.json';
    private shoppingListJSON = 'shopping.json';

    constructor(private http: Http, private authService: AuthService) {}

    storeRecipes(recipes: Recipe[]) {
        return this.http.put(this.URL + this.recipeJSON + '?auth=' + this.authService.token, recipes);
    }
    getRecipes() {
        return this.http.get(this.URL + this.recipeJSON + '?auth=' + this.authService.token)
          .map((response: Response) => {
              return response.json();
          });
    }

    storeIngredients(ingredients: Ingredient[]) {
        return this.http.put(this.URL + this.shoppingListJSON + '?auth=' + this.authService.token, ingredients);
    }
    getIngredients() {
        return this.http.get(this.URL + this.shoppingListJSON + '?auth=' + this.authService.token)
          .map((response: Response) => {
              return response.json();
          });
    }
}
