import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HasilpolingPageRoutingModule } from './hasilpoling-routing.module';

import { HasilpolingPage } from './hasilpoling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HasilpolingPageRoutingModule
  ],
  declarations: [HasilpolingPage]
})
export class HasilpolingPageModule {}
