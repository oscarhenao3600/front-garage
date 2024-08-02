import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerListaReparacionesComponent } from './container-lista-reparaciones.component';

describe('ContainerListaReparacionesComponent', () => {
  let component: ContainerListaReparacionesComponent;
  let fixture: ComponentFixture<ContainerListaReparacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerListaReparacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerListaReparacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
