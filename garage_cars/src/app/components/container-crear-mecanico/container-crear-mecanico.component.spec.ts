import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCrearMecanicoComponent } from './container-crear-mecanico.component';

describe('ContainerCrearMecanicoComponent', () => {
  let component: ContainerCrearMecanicoComponent;
  let fixture: ComponentFixture<ContainerCrearMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerCrearMecanicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCrearMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
