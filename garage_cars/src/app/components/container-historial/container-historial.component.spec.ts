import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerHistorialComponent } from './container-historial.component';

describe('ContainerHistorialComponent', () => {
  let component: ContainerHistorialComponent;
  let fixture: ComponentFixture<ContainerHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerHistorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
