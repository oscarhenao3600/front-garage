import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerModifyCustomerComponent } from './container-modify-customer.component';

describe('ContainerModifyCustomerComponent', () => {
  let component: ContainerModifyCustomerComponent;
  let fixture: ComponentFixture<ContainerModifyCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerModifyCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerModifyCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
