import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from './../recipe.model';
import { ShoppingService } from './../../shopping/shopping.service';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipes: RecipeService,
              private shoppingList: ShoppingService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.selectedRecipe = this.recipes.getRecipeWithId(+params['id']);
      }
    );
  }

  sendIngredientsToShoppingList() {
    this.shoppingList.addIngredients(this.selectedRecipe.ingredients);
  }

  onRecipeDelete() {
    this.recipes.removeRecipe(this.selectedRecipe.id);
    this.router.navigate(['recipes']);
  }

}
