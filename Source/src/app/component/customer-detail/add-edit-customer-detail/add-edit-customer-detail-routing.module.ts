import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditCustomerDetailComponent } from './add-edit-customer-detail.component';

const routes: Routes = [{ path: '', component: AddEditCustomerDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEditCustomerDetailRoutingModule { }
