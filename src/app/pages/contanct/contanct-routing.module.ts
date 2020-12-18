import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContanctPage } from './contanct.page';

const routes: Routes = [
  {
    path: '',
    component: ContanctPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContanctPageRoutingModule {}
