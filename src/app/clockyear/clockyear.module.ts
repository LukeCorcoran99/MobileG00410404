import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClockyearPageRoutingModule } from './clockyear-routing.module';

import { ClockyearPage } from './clockyear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClockyearPageRoutingModule
  ],
  declarations: [ClockyearPage]
})
export class ClockyearPageModule {}
