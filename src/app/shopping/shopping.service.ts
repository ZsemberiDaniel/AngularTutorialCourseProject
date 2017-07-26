import { AuthService } from './../auth/auth.service';
import { FirebaseServerService } from './../shared/firebase-server.service';
import { Injectable } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

@Injectable()
export class ShoppingService {
    private _shoppingList: Ingredient[] = [];
    get shoppingList(): Ingredient[] { return this._shoppingList.slice(); }

    constructor(private firebaseServer: FirebaseServerService, private authService: AuthService) {
        // if user authenticated or will be authenticated fetch the data
        if (authService.isAuthenticated) {
            this.fetchIngredients();
        }

        this.authService.onSigninStatusChanged.subscribe((loggedin: boolean) => {
            // when log in get the ingredients
            if (loggedin) {
                this.fetchIngredients();
            } else {
                this._shoppingList.splice(0, this._shoppingList.length);
            }
        });
    }

    private fetchIngredients() {
        this.firebaseServer.getIngredients().subscribe(
            (ingredients) => this._shoppingList = ingredients ? ingredients : [],
            (error) => { }
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
