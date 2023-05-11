
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClockyearPageRoutingModule } from './clockyear-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ClockyearPage } from './clockyear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClockyearPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ClockyearPage]
})
export class ClockyearPageModule {}

