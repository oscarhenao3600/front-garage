import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMainReceptionComponent } from './container-main-reception.component';

describe('ContainerMainReceptionComponent', () => {
  let component: ContainerMainReceptionComponent;
  let fixture: ComponentFixture<ContainerMainReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerMainReceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerMainReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
