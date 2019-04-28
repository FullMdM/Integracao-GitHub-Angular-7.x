import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRouting } from './home.routing';
import { HomeComponent } from './home.component';

import { LanguageService } from '../../services/language.service'

@NgModule({
    imports: [
        CommonModule,
        HomeRouting,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        HomeComponent
    ], exports: [
        RouterModule
    ], providers: [
        LanguageService
    ]
})
export class HomeModule { }
