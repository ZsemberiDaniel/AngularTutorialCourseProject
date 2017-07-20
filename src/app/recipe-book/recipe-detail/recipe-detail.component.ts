import { ShoppingService } from './../../shopping/shopping.service';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(protected recipes: RecipeService, protected shoppingList: ShoppingService) { }

  ngOnInit() {
  }

  sendIngredientsToShoppingList() {
    this.shoppingList.addIngredients(this.recipes.selectedRecipe.ingredients);
  }

}
