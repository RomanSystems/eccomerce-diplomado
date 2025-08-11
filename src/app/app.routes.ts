import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./presentation/components/product-list-component/product-list.component')
      .then(m => m.ProductListComponent),
    title: 'Lista Productos'
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./presentation/components/product-details/product-details.component')
      .then(m => m.ProductDetailsComponent),
  }
];
