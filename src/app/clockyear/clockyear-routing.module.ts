import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClockyearPage } from './clockyear.page';

const routes: Routes = [
  {
    path: '',
    component: ClockyearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClockyearPageRoutingModule {}
