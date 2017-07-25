import { Ingredient } from './../shared/ingredient.model';

export class ShoppingService {
    private _shoppingList: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Pear', 3),
        new Ingredient('Pineapple', 10)
    ];
    get shoppingList(): Ingredient[] { return this._shoppingList.slice(); }

    getIngredient(index: number): Ingredient { return this._shoppingList[index]; }

    public deleteIngredient(index: number) {
        this._shoppingList.splice(index, 1);
    }

    public updateIngredient(index: number, newIngredient: Ingredient) {
        this._shoppingList[index] = newIngredient;
    }

    public addIngredient(ingr: Ingredient) {
        this._shoppingList.push(ingr);
    }
    public addIngredients(ingredients: Ingredient[]) {
        this._shoppingList.push(...ingredients);
    }
}
