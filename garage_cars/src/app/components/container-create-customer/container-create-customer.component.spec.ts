import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCreateCustomerComponent } from './container-create-customer.component';

describe('ContainerCreateCustomerComponent', () => {
  let component: ContainerCreateCustomerComponent;
  let fixture: ComponentFixture<ContainerCreateCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerCreateCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCreateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
