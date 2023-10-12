import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProducNuevoPageRoutingModule } from './produc-nuevo-routing.module';

import { ProducNuevoPage } from './produc-nuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProducNuevoPageRoutingModule
  ],
  declarations: [ProducNuevoPage]
})
export class ProducNuevoPageModule {}
