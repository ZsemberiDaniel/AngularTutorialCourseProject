import { AuthGuardService } from './../auth/auth-guard.service';
import { FirebaseServerService } from './../shared/firebase-server.service';
import { AuthService } from './../auth/auth.service';
import { CanDeactivateGuard } from './../can-deactivate-guard.service';
import { ShoppingService } from './../shopping/shopping.service';
import { RecipeService } from './../recipe-book/recipe.service';

import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        RecipeService,
        ShoppingService,
        CanDeactivateGuard,
        FirebaseServerService,
        AuthService,
        AuthGuardService
    ]
})
export class CoreModule { }
