
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClockmonthPageRoutingModule } from './clockmonth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ClockmonthPage } from './clockmonth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClockmonthPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ClockmonthPage]
})
export class ClockmonthPageModule {}
