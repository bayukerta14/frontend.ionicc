import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataKandidatAdminPage } from './data-kandidat-admin.page';

const routes: Routes = [
  {
    path: '',
    component: DataKandidatAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataKandidatAdminPageRoutingModule {}
