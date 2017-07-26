import { Observable } from 'rxjs/Observable';
import { CanComponentDeactivate } from './../../can-deactivate-guard.service';
import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { Ingredient } from './../../shared/ingredient.model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, CanComponentDeactivate {

  private id: number;
  private createMode = false;

  private valueChangeSubscription: Subscription;
  private hasBeenEdited = false;
  /**
   * Used for the deactivation guard so when the user clicks the Save button it lets him continue
   */
  private saveClicked = false;

  form: FormGroup;
  get ingredientControls(): FormArray { return (<FormArray> this.form.get('ingredients')); }

  constructor(private recipeService: RecipeService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // deal with query params
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.createMode = params['id'] == null;

        if (!this.createMode) {
          this.id = +params['id'];
        }
      }
     );

    // init form
    this.form = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'imagePath': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'ingredients': new FormArray([])
    });

    // if in edit mode add the given informations from this.id
    if (!this.createMode) {
      const recipe = this.recipeService.getRecipeWithId(this.id);
      this.form.patchValue({
        'name': recipe.name,
        'imagePath': recipe.imagePath,
        'description': recipe.description
      });

      for (let ingr of recipe.ingredients) {
        this.addNewIngredient(ingr.name, ingr.amount);
      }
    }

    // setup has been edited boolean observer
    this.valueChangeSubscription = this.form.valueChanges.subscribe((value) => {
      this.hasBeenEdited = true;
      this.valueChangeSubscription.unsubscribe();
    });
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.saveClicked) {
      return true;
    }

    if (this.hasBeenEdited) {
      return confirm('All changes will be lost. Continue?');
    }

    return true;
  }

  /**
   * Called when the form was cancelled
   */
  onCancel() {
    this.form.reset();
    this.router.navigate(['recipes']);
  }

  /**
   * Called when the form was submitted
   */
  onSubmit() {
    this.saveClicked = true;

    const newRecipe = new Recipe(
      0,
      this.form.get('name').value,
      this.form.get('description').value,
      this.form.get('imagePath').value,
      (<FormArray>this.form.get('ingredients')).controls.map(group => {
        return new Ingredient(group.get('name').value, +group.get('amount').value);
      })
    );
    let newId: number;

    if (this.createMode) {
      newId = this.recipeService.addRecipe(newRecipe);
    } else {
      newId = this.recipeService.updateRecipe(newRecipe, this.id);
    }

    this.form.reset();
    this.router.navigate(['recipes', 'details'], { queryParams: { id: newId } });
  }

  /**
   * Called when a delete button on an ingredient has been pressed
   * @param index On which ingredient it was pressed in the FormArray (number)
   */
  onDeleteIngredient(index: number) {
    (<FormArray> this.form.get('ingredients')).removeAt(index);
  }

  /**
   * Called when the Add ingredient button is pressed
   */
  onAddNewIngredient() {
    this.addNewIngredient(null, 1);
  }

  /**
   * Adds a new ingredient to the form
   * @param name Name of ingredient. Could be null
   * @param amount Amount of ingredient. At least 1
   */
  addNewIngredient(name: string, amount: number) {
    (<FormArray> this.form.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(name, Validators.required),
        'amount': new FormControl(amount, [Validators.required, Validators.min(1)])
      })
    );
  }

}
