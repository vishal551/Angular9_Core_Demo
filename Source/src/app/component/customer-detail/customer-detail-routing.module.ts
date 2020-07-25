import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomerDetailComponent } from "./customer-detail.component";
import { AddEditCustomerDetailModule } from "./add-edit-customer-detail/add-edit-customer-detail.module";

const routes: Routes = [
  {
    path: "",
    component: CustomerDetailComponent,
  },
];
// const routes: Routes = [{ path: '' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerDetailRoutingModule {}
