import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    children: [
      {
        path: 'item',
        loadChildren: () =>
          import('./stock/stock.module').then((m) => m.StockModule),
      },
      {
        path: 'stock',
        loadChildren: () =>
          import('./stock/stock.module').then((m) => m.StockModule),
      },
    ],
  },
];
