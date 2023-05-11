import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClockmonthPageRoutingModule } from './clockmonth-routing.module';

import { ClockmonthPage } from './clockmonth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClockmonthPageRoutingModule
  ],
  declarations: [ClockmonthPage]
})
export class ClockmonthPageModule {}
