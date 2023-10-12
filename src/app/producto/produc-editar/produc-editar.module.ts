import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProducEditarPageRoutingModule } from './produc-editar-routing.module';

import { ProducEditarPage } from './produc-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProducEditarPageRoutingModule
  ],
  declarations: [ProducEditarPage]
})
export class ProducEditarPageModule {}
