import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerIngresoVehiculoComponent } from './container-ingreso-vehiculo.component';

describe('ContainerIngresoVehiculoComponent', () => {
  let component: ContainerIngresoVehiculoComponent;
  let fixture: ComponentFixture<ContainerIngresoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerIngresoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerIngresoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
