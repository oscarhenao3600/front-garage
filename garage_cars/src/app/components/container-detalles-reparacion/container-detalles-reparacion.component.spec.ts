import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDetallesReparacionComponent } from './container-detalles-reparacion.component';

describe('ContainerDetallesReparacionComponent', () => {
  let component: ContainerDetallesReparacionComponent;
  let fixture: ComponentFixture<ContainerDetallesReparacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerDetallesReparacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerDetallesReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
