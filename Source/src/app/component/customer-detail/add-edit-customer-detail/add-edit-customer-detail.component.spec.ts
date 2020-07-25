import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCustomerDetailComponent } from './add-edit-customer-detail.component';

describe('AddEditCustomerDetailComponent', () => {
  let component: AddEditCustomerDetailComponent;
  let fixture: ComponentFixture<AddEditCustomerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditCustomerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
