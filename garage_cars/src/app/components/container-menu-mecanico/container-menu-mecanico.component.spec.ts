import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMenuMecanicoComponent } from './container-menu-mecanico.component';

describe('ContainerMenuMecanicoComponent', () => {
  let component: ContainerMenuMecanicoComponent;
  let fixture: ComponentFixture<ContainerMenuMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerMenuMecanicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerMenuMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
