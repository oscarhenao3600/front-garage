import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReceptionComponent } from './main-reception.component';

describe('MainReceptionComponent', () => {
  let component: MainReceptionComponent;
  let fixture: ComponentFixture<MainReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainReceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
