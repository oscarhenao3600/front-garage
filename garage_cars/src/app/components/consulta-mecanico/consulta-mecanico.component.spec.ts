import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMecanicoComponent } from './consulta-mecanico.component';

describe('ConsultaMecanicoComponent', () => {
  let component: ConsultaMecanicoComponent;
  let fixture: ComponentFixture<ConsultaMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaMecanicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
