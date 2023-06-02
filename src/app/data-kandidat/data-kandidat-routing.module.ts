import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataKandidatPage } from './data-kandidat.page';

const routes: Routes = [
  {
    path: '',
    component: DataKandidatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataKandidatPageRoutingModule {}
