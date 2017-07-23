import { ShoppingService } from './../shopping.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  constructor(protected shoppingService: ShoppingService) {}

  addIngredient(ingredient: Ingredient) {
    this.shoppingService.addIngredient(ingredient);
  }

}
