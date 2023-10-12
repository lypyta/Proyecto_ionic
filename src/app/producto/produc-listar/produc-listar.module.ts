import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProducListarPageRoutingModule } from './produc-listar-routing.module';

import { ProducListarPage } from './produc-listar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProducListarPageRoutingModule
  ],
  declarations: [ProducListarPage]
})
export class ProducListarPageModule {}
