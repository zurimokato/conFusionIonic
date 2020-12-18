import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContanctPageRoutingModule } from './contanct-routing.module';

import { ContanctPage } from './contanct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContanctPageRoutingModule
  ],
  declarations: [ContanctPage]
})
export class ContanctPageModule {}
