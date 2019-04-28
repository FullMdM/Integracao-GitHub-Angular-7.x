import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'prefix' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
    { path: 'repository/:language/:term', loadChildren: './pages/repository/repository.module#RepositoryModule' },
    { path: 'repository-details/:id', loadChildren: './pages/repository-details/repository-details.module#RepositoryDetailsModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRouting { }
