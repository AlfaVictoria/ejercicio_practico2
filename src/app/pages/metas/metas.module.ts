import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetasPageRoutingModule } from './metas-routing.module';

import { MetasPage } from './metas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MetasPage]
})
export class MetasPageModule {}
