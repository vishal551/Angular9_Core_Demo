import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./theme/layout/admin/admin.component";
import { AuthComponent } from "./theme/layout/auth/auth.component";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./component/login/login.module").then(
        (module) => module.LoginModule
      ),
  },
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "",
        redirectTo: "sample-page",
        pathMatch: "full",
      },
      {
        path: "sample-page",
        loadChildren: () =>
          import("./demo/pages/sample-page/sample-page.module").then(
            (module) => module.SamplePageModule
          ),
      },
      {
        path: "customer-detail",
        loadChildren: () =>
          import("./component/customer-detail/customer-detail.module").then(
            (m) => m.CustomerDetailModule
          ),
      },
      {
        path: "customer-detail/add-edit-customer-detail",
        loadChildren: () =>
          import(
            "./component/customer-detail/add-edit-customer-detail/add-edit-customer-detail.module"
          ).then((m) => m.AddEditCustomerDetailModule),
      },
    ],
  },
  {
    path: "",
    component: AuthComponent,
    children: [],
  },
  {
    path: "add-edit-customer-detail",
    loadChildren: () =>
      import(
        "./component/customer-detail/add-edit-customer-detail/add-edit-customer-detail.module"
      ).then((m) => m.AddEditCustomerDetailModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./component/login/login.module").then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
