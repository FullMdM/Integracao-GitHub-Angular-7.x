import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryComponent } from './repository.component';

const routes: Routes = [
    {
        path: "", component: RepositoryComponent,
        children: [
            // { path: "repository-details/:id", loadChildren: "..\/repository-details\/repository-details.module#RepositoryDetailsModule" },
            // { path: "repository-details/:id", loadChildren: "../repository-details/repository-details.module#RepositoryDetailsModule" },
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RepositoryRouting { }
