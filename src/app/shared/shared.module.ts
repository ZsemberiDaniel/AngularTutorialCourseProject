import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormGroupDirective } from './../form-group.directive';
import { DropdownDirective } from './dropdown.directive';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        DropdownDirective,
        FormGroupDirective
    ],
    exports: [
        CommonModule,
        DropdownDirective,
        FormGroupDirective,
        ReactiveFormsModule,
        FormsModule,
        HttpModule
    ]
})
export class SharedModule { }
