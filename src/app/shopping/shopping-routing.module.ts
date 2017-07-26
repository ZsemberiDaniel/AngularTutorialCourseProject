import { AuthGuardService } from './../auth/auth-guard.service';

import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

const shoppingRoutes: Routes = [
  { path: '', component: ShoppingListComponent, canActivate: [AuthGuardService], canActivateChild: [AuthGuardService], children: [
    { path: 'edit', component: ShoppingListEditComponent }
  ] },
];

@NgModule({
    imports: [RouterModule.forChild(shoppingRoutes)],
    exports: [RouterModule]
})
export class ShoppingRoutingModule {}
