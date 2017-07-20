import { Ingredient } from './../shared/ingredient.model';

export class ShoppingService {
    private _shoppingList: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Pear', 3),
        new Ingredient('Pineapple', 10)
    ];
    get shoppingList(): Ingredient[] { return this._shoppingList.slice(); }

    public addIngredient(ingr: Ingredient) {
        this._shoppingList.push(ingr);
    }
    public addIngredients(ingredients: Ingredient[]) {
        this._shoppingList.push(...ingredients);
    }
}
