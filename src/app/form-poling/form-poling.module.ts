import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPolingPageRoutingModule } from './form-poling-routing.module';

import { FormPolingPage } from './form-poling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPolingPageRoutingModule
  ],
  declarations: [FormPolingPage]
})
export class FormPolingPageModule {}
