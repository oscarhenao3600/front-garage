import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerQueryCustomerComponent } from './container-query-customer.component';

describe('ContainerQueryCustomerComponent', () => {
  let component: ContainerQueryCustomerComponent;
  let fixture: ComponentFixture<ContainerQueryCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerQueryCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerQueryCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
