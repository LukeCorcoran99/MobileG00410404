import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClockhomePage } from './clockhome.page';

const routes: Routes = [
  {
    path: '',
    component: ClockhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClockhomePageRoutingModule {}
