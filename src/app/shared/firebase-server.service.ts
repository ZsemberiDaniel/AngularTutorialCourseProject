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

    constructor(private http: Http) {}

    storeRecipes(recipes: Recipe[]) {
        return this.http.put(this.URL + this.recipeJSON, recipes);
    }
    getRecipes() {
        return this.http.get(this.URL + this.recipeJSON).map((response: Response) => {
            return response.json();
        });
    }

    storeIngredients(ingredients: Ingredient[]) {
        return this.http.put(this.URL + this.shoppingListJSON, ingredients);
    }
    getIngredients() {
        return this.http.get(this.URL + this.shoppingListJSON).map((response: Response) => {
            return response.json();
        });
    }
}
