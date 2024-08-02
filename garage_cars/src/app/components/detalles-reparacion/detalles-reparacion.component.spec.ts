import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesReparacionComponent } from './detalles-reparacion.component';

describe('DetallesReparacionComponent', () => {
  let component: DetallesReparacionComponent;
  let fixture: ComponentFixture<DetallesReparacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesReparacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
