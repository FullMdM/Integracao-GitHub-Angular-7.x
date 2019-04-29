import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RepositoryService } from '../../services/repository.service';

import { RepositoryRouting } from './repository.routing';

import { RepositoryComponent } from './repository.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        RepositoryRouting,
        NgbModule,
        NgbPaginationModule
    ],
    declarations: [
        RepositoryComponent,
    ], exports: [
        RouterModule,
    ], providers: [
        RepositoryService
    ], schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class RepositoryModule { }
