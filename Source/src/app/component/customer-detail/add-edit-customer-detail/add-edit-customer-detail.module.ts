import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AddEditCustomerDetailRoutingModule } from "./add-edit-customer-detail-routing.module";
import { AddEditCustomerDetailComponent } from "./add-edit-customer-detail.component";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { AngularDualListBoxModule } from "angular-dual-listbox";
import { ToastyModule } from "ng2-toasty";
@NgModule({
  declarations: [AddEditCustomerDetailComponent],
  imports: [
    CommonModule,
    AddEditCustomerDetailRoutingModule,
    SharedModule,
    AngularDualListBoxModule,
    ToastyModule.forRoot(),
  ],
})
export class AddEditCustomerDetailModule {}
