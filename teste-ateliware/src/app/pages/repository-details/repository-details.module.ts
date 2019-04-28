import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RepositoryService } from '../../services/repository.service';

import { RepositoryDetailsRouting } from './repository-details.routing';

import { RepositoryDetailsComponent } from './repository-details.component';

@NgModule({
    imports: [
        CommonModule,
        RepositoryDetailsRouting,
    ],
    declarations: [
        RepositoryDetailsComponent
    ], exports: [
        RouterModule
    ], providers: [
        RepositoryService
    ]
})
export class RepositoryDetailsModule { }
