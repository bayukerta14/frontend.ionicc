import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPolingPage } from './form-poling.page';

const routes: Routes = [
  {
    path: '',
    component: FormPolingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPolingPageRoutingModule {}
