import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProducNuevoPage } from './produc-nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: ProducNuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProducNuevoPageRoutingModule {}
