import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRouting } from './home.routing';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRouting,
    ],
    declarations: [
        HomeComponent
    ], exports: [
        RouterModule
    ], providers: []
})
export class HomeModule { }
