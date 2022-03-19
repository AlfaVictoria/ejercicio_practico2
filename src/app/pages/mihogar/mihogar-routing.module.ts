import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MihogarPage } from './mihogar.page';

const routes: Routes = [
  {
    path: '',
    component: MihogarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MihogarPageRoutingModule {}
