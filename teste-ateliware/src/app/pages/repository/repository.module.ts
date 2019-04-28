import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RepositoryService } from '../../services/repository.service';

import { RepositoryRouting } from './repository.routing';

import { RepositoryComponent } from './repository.component';

@NgModule({
    imports: [
        CommonModule,
        RepositoryRouting,
    ],
    declarations: [
        RepositoryComponent
    ], exports: [
        RouterModule
    ], providers: [
        RepositoryService
    ]
})
export class RepositoryModule { }
