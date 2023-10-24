import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarPageRoutingModule } from './agendar-routing.module';

<<<<<<< HEAD:src/app/producto/produc-nuevo/produc-nuevo.module.ts
import { ProducNuevoPage } from './produc-nuevo.page';
import { ReactiveFormsModule } from '@angular/forms';

=======
import { AgendarPage } from './agendar.page';
>>>>>>> parent of d4bcab6 (creacion producto):src/app/agendar/agendar.module.ts

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD:src/app/producto/produc-nuevo/produc-nuevo.module.ts
    ProducNuevoPageRoutingModule,
    ReactiveFormsModule,

=======
    AgendarPageRoutingModule
>>>>>>> parent of d4bcab6 (creacion producto):src/app/agendar/agendar.module.ts
  ],
  declarations: [AgendarPage]
})
export class AgendarPageModule {}
