import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerConsultaMecanicoComponent } from './container-consulta-mecanico.component';

describe('ContainerConsultaMecanicoComponent', () => {
  let component: ContainerConsultaMecanicoComponent;
  let fixture: ComponentFixture<ContainerConsultaMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerConsultaMecanicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerConsultaMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
