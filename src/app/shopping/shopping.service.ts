import { FirebaseServerService } from './../shared/firebase-server.service';
import { Injectable } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

@Injectable()
export class ShoppingService {
    private _shoppingList: Ingredient[] = [];
    get shoppingList(): Ingredient[] { return this._shoppingList.slice(); }

    constructor(private firebaseServer: FirebaseServerService) {
         firebaseServer.getIngredients().subscribe(
            (ingredients) => this._shoppingList = ingredients ? ingredients : [],
            (error) => {}
        );
    }

    getIngredient(index: number): Ingredient { return this._shoppingList[index]; }

    public deleteIngredient(index: number) {
        this._shoppingList.splice(index, 1);
        this.storeIngredients();
    }

    public updateIngredient(index: number, newIngredient: Ingredient) {
        this._shoppingList[index] = newIngredient;
        this.storeIngredients();
    }

    public addIngredient(ingr: Ingredient) {
        this._shoppingList.push(ingr);
        this.storeIngredients();
    }
    public addIngredients(ingredients: Ingredient[]) {
        this._shoppingList.push(...ingredients);
        this.storeIngredients();
    }

    storeIngredients() {
        this.firebaseServer.storeIngredients(this._shoppingList).subscribe(
            (response) => {},
            (error) => {}
        );
    }
}
