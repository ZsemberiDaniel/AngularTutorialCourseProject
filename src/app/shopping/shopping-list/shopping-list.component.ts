import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingService } from './../shopping.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  constructor(public shoppingService: ShoppingService,
              private router: Router,
              private route: ActivatedRoute) {}

  addIngredient(ingredient: Ingredient) {
    this.shoppingService.addIngredient(ingredient);
  }

  onEditItem(index: number) {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParams: { id: index } });
  }

}
