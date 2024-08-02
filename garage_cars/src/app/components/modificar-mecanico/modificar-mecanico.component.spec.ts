import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarMecanicoComponent } from './modificar-mecanico.component';

describe('ModificarMecanicoComponent', () => {
  let component: ModificarMecanicoComponent;
  let fixture: ComponentFixture<ModificarMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarMecanicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
