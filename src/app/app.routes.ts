import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent) 
  },
  { 
    path: 'blog', 
    loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent) 
  },
  { path: '**', redirectTo: '' }
];