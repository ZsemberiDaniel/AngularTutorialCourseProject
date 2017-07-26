import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

const authRoute: Routes = [
  { path: 'sign-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent }
];

@NgModule({
    imports: [RouterModule.forChild(authRoute)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
