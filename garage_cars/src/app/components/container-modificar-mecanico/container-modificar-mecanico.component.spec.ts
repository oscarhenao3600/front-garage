import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerModificarMecanicoComponent } from './container-modificar-mecanico.component';

describe('ContainerModificarMecanicoComponent', () => {
  let component: ContainerModificarMecanicoComponent;
  let fixture: ComponentFixture<ContainerModificarMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerModificarMecanicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerModificarMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
