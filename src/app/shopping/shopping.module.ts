import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';

import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        ShoppingListEditComponent,
        ShoppingListComponent
    ],
    imports: [
        SharedModule,
        ShoppingRoutingModule
    ]
})
export class ShoppingModule {}
