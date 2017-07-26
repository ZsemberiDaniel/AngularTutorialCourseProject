import { HomeComponent } from './core/home/home.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import {NgModule} from '@angular/core';
import { Route, RouterModule, PreloadAllModules } from '@angular/router';
import {RecipeBookComponent} from './recipe-book/recipe-book.component';
import {ShoppingListComponent} from './shopping/shopping-list/shopping-list.component';

const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shopping', loadChildren: './shopping/shopping.module#ShoppingModule', canLoad: [AuthGuardService] },
  { path: 'recipes', loadChildren: './recipe-book/recipe.module#RecipeModule', canLoad: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
