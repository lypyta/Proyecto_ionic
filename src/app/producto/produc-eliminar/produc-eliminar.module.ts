import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProducEliminarPageRoutingModule } from './produc-eliminar-routing.module';

import { ProducEliminarPage } from './produc-eliminar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProducEliminarPageRoutingModule
  ],
  declarations: [ProducEliminarPage]
})
export class ProducEliminarPageModule {}
