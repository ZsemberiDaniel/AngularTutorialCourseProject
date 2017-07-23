import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {RecipeBookComponent} from './recipe-book/recipe-book.component';
import {ShoppingListComponent} from './shopping/shopping-list/shopping-list.component';

const routes: Route[] = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeBookComponent, children: [
    { path: 'details', component: RecipeDetailComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: 'edit', component: RecipeEditComponent }
  ]},
  { path: 'shopping', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
