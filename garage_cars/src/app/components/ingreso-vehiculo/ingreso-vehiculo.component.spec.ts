import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoVehiculoComponent } from './ingreso-vehiculo.component';

describe('IngresoVehiculoComponent', () => {
  let component: IngresoVehiculoComponent;
  let fixture: ComponentFixture<IngresoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
