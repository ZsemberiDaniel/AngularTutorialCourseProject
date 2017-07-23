import { ShoppingService } from './../shopping.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  @ViewChild('f') editForm: NgForm;

  constructor(private shoppingService: ShoppingService) {}

  addIngredient() {
    this.shoppingService.addIngredient(
      new Ingredient(this.editForm.value['name'], +this.editForm.value['amount'])
    );
    this.editForm.reset();
  }

}
