import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomerDetailRoutingModule } from "./customer-detail-routing.module";
import { CustomerDetailComponent } from "./customer-detail.component";
import { SharedModule } from "src/app/theme/shared/shared.module";

@NgModule({
  declarations: [CustomerDetailComponent],
  imports: [CommonModule, CustomerDetailRoutingModule, SharedModule],
})
export class CustomerDetailModule {}
