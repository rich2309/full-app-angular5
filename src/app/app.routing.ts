import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importing components
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductListComponent } from './components/product/list/product-list.component';
import { ProductAddComponent } from './components/product/add/product-add.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductListComponent},
  {path: 'nuevo-producto', component: ProductAddComponent},
  {path: '**', component : ErrorComponent}
];

export const AppRoutingProviders: any[] = [];
export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
