import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProducListarPage } from './produc-listar.page';

const routes: Routes = [
  {
    path: '',
    component: ProducListarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProducListarPageRoutingModule {}
