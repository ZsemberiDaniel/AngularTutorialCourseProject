import { ShoppingService } from './../shopping.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  @ViewChild('nameInput') nameInputField: ElementRef;
  @ViewChild('amountInput') amountInputField: ElementRef;

  constructor(private shoppingService: ShoppingService) {}

  addIngredient() {
    this.shoppingService.addIngredient(
      new Ingredient(this.nameInputField.nativeElement.value, this.amountInputField.nativeElement.value)
    );
  }

}
