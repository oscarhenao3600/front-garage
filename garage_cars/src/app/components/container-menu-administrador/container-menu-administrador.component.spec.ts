import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMenuAdministradorComponent } from './container-menu-administrador.component';

describe('ContainerMenuAdministradorComponent', () => {
  let component: ContainerMenuAdministradorComponent;
  let fixture: ComponentFixture<ContainerMenuAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerMenuAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerMenuAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
