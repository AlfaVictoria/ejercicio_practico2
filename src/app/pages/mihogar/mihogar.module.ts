import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MihogarPageRoutingModule } from './mihogar-routing.module';

import { MihogarPage } from './mihogar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MihogarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MihogarPage]
})
export class MihogarPageModule {}
