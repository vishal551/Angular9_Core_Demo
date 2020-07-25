import { Component, OnInit } from "@angular/core";
import { DualListComponent } from "angular-dual-listbox";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ToastyService, ToastOptions } from "ng2-toasty";

@Component({
  selector: "app-add-edit-customer-detail",
  templateUrl: "./add-edit-customer-detail.component.html",
  styleUrls: ["./add-edit-customer-detail.component.scss"],
})
export class AddEditCustomerDetailComponent implements OnInit {
  customerDetail: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastyService: ToastyService
  ) {}
  submitted = false;
  CustomerType = [];

  ngOnInit(): void {
    // Start Form validation
    this.customerDetail = this.formBuilder.group({
      ReqName: [""],
      StartDate: ["", Validators.required],
      EndDate: ["", Validators.required],
      ReqEmail: ["", [Validators.email]],
      CustomerType: [""],
      ReqDesc: [""],
      // OrganizationSelectedItems: ["", Validators.required],
      // RegionSelectedItems: ["", Validators.required],
      // StateSelectedItems: ["", Validators.required],
      // BranchSelectedItems: ["", Validators.required],
    });
    // End Form validation

    this.CustomerType = this.getOrders();
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.customerDetail.controls;
  }
  source = [];
  target = [];
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.customerDetail.invalid) {
      return;
    }

    // display form values on success
    const toastOptions: ToastOptions = {
      title: "Thanks!",
      msg: "Customer Detail Submitted",
      showClose: true,
      timeout: 5000,
      theme: "material",
    };
    this.toastyService.success(toastOptions);
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.customerDetail.value, null, 4)
    );
  }
  onReset() {
    this.submitted = false;
    this.customerDetail.reset();
  }
  getOrders() {
    return [
      { id: "1", name: "Customer Type 1" },
      { id: "2", name: "Customer Type 2" },
      { id: "3", name: "Customer Type 3" },
      { id: "4", name: "Customer Type 4" },
    ];
  }
  onCustomerRequestChange(ID) {
    this.source = ["Pawn", "Rook", "Knight", "Bishop", "Queen", "King"];
  }
}
