import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },

      {
        path: 'pokemon',
        loadComponent: () =>
          import('../pokemon/pokemon.page').then((m) => m.PokemonPage),
      },

      {
        path: 'search',
        loadComponent: () =>
          import('../search/search.page').then((m) => m.SearchPage),
      },

      {
        path: 'signup',
        loadComponent: () =>
          import('../signup2/signup2.page').then((m) => m.Signup2Page),
      },

      {
        path: 'list1',
        loadComponent: () =>
          import('../list1/list1.page').then((m) => m.List1Page),
      },

      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
