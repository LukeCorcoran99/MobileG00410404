import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClockhomePageRoutingModule } from './clockhome-routing.module';

import { ClockhomePage } from './clockhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClockhomePageRoutingModule
  ],
  declarations: [ClockhomePage]
})
export class ClockhomePageModule {}
