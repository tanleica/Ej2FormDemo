import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Ej2FormDemoComponent } from './ej2-form-demo/ej2-form-demo.component';
import { PageNotFound404Component } from './page-not-found404/page-not-found404.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'ej2-form-demo',
    component: Ej2FormDemoComponent
  },
  {
    path: 'page-not-found-404',
    component: PageNotFound404Component,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'page-not-found-404',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
