import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'header',
    loadComponent: () => import('./header/header.page').then( m => m.HeaderPage)
  },
  {
    path: 'pokemon',
    loadComponent: () => import('./pokemon/pokemon.page').then( m => m.PokemonPage)
  },
  {
    path: 'search',
    loadComponent: () => import('./search/search.page').then( m => m.SearchPage)
  },
  {
    path: 'signup2',
    loadComponent: () => import('./signup2/signup2.page').then( m => m.Signup2Page)
  },

  {
    path: 'list1',
    loadComponent: () => import('./list1/list1.page').then( m => m.List1Page)
  },

];
