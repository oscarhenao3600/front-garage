import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerListCustomerComponent } from './container-list-customer.component';

describe('ContainerListCustomerComponent', () => {
  let component: ContainerListCustomerComponent;
  let fixture: ComponentFixture<ContainerListCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerListCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerListCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
