import { CanDeactivateGuard } from './../can-deactivate-guard.service';
import { AuthGuardService } from './../auth/auth-guard.service';

import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeBookComponent } from './recipe-book.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const recipeRoutes: Routes = [
  { path: '', component: RecipeBookComponent, canActivate: [AuthGuardService], canActivateChild: [AuthGuardService], children: [
    { path: 'details', component: RecipeDetailComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: 'edit', component: RecipeEditComponent, canDeactivate: [CanDeactivateGuard] }
  ]},
];

@NgModule({
    imports: [RouterModule.forChild(recipeRoutes)],
    exports: [RouterModule]
})
export class RecipeRoutingModule { }
