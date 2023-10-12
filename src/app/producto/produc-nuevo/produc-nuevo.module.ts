import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProducNuevoPageRoutingModule } from './produc-nuevo-routing.module';

import { ProducNuevoPage } from './produc-nuevo.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProducNuevoPageRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [ProducNuevoPage]
})
export class ProducNuevoPageModule {}
