import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'AboutMe',
    pathMatch: 'full'
  },
  {
    path: 'AboutMe',
    loadChildren: () => import('./pages/about-me/about-me.module').then(m=>m.AboutMePageModule)
  },
  {
    path: 'mihogar',
    loadChildren: () => import('./pages/mihogar/mihogar.module').then( m => m.MihogarPageModule)
  },
  {
    path: 'metas',
    loadChildren: () => import('./pages/metas/metas.module').then( m => m.MetasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
