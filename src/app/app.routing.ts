import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
