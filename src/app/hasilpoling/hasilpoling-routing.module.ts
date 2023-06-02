import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HasilpolingPage } from './hasilpoling.page';

const routes: Routes = [
  {
    path: '',
    component: HasilpolingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HasilpolingPageRoutingModule {}
