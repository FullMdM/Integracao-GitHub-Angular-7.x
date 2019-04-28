import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryDetailsComponent } from './repository-details.component';

const routes: Routes = [
    {
        path: "", component: RepositoryDetailsComponent,
        children: [
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RepositoryDetailsRouting { }
