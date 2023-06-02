import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataKandidatPageRoutingModule } from './data-kandidat-routing.module';

import { DataKandidatPage } from './data-kandidat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataKandidatPageRoutingModule
  ],
  declarations: [DataKandidatPage]
})
export class DataKandidatPageModule {}
