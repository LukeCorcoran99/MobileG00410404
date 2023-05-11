import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClockmonthPage } from './clockmonth.page';

const routes: Routes = [
  {
    path: '',
    component: ClockmonthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClockmonthPageRoutingModule {}
