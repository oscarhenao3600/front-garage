import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerListaMecanicosComponent } from './container-lista-mecanicos.component';

describe('ContainerListaMecanicosComponent', () => {
  let component: ContainerListaMecanicosComponent;
  let fixture: ComponentFixture<ContainerListaMecanicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerListaMecanicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerListaMecanicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
