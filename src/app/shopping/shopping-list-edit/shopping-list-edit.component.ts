import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingService } from './../shopping.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, ViewChild, ElementRef, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  protected editForm: FormGroup;

  private editMode = { editing: false, index: -1, item: <Ingredient> null };
  protected get editing() { return this.editMode.editing; }

  constructor(private shoppingService: ShoppingService, private route: ActivatedRoute,
             private router: Router) {}

  ngOnInit() {
    this.editForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.min(1)])
    });

    this.route.queryParams.subscribe(
      (params: Params) => {
        if (params['id'] != null) {
          this.startEditing(+params['id']);
        } else {
          this.editMode.editing = false;
        }
      }
    );
  }

  clearForm() {
    this.editForm.reset();
    if (this.editing) {
      this.router.navigate(['/shopping']);
    }
  }

  deleteSelected() {
    if (this.editing) {
      this.shoppingService.deleteIngredient(this.editMode.index);

      this.editForm.reset();
      this.router.navigate(['/shopping']);
    }
  }

  /**
   * Start editing the given item
   * @param index The index of the item in the shoppingService
   */
  startEditing(index: number) {
    this.editMode.editing = true;
    this.editMode.index = index;
    this.editMode.item = this.shoppingService.getIngredient(this.editMode.index);

    this.editForm.setValue({
      name: this.editMode.item.name,
      amount: this.editMode.item.amount
    });
  }

  onFormSubmit() {
    if (this.editing) {
      this.shoppingService.updateIngredient(
        this.editMode.index,
        new Ingredient(this.editForm.value.name, this.editForm.value.amount)
      );

      this.router.navigate(['/shopping']);
    } else {
      this.shoppingService.addIngredient(
        new Ingredient(this.editForm.value.name, this.editForm.value.amount)
      );
    }
    this.editForm.reset();
  }

}
