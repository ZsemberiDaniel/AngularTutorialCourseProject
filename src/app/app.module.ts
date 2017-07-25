import { FirebaseServerService } from './shared/firebase-server.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { FormGroupDirective } from './form-group.directive';
import { RecipeService } from './recipe-book/recipe.service';
import { ShoppingService } from './shopping/shopping.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import {AppRoutingModule} from './app-routing.module';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    RecipeItemComponent,
    DropdownDirective,
    RecipeEditComponent,
    FormGroupDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [RecipeService, ShoppingService, CanDeactivateGuard, FirebaseServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
