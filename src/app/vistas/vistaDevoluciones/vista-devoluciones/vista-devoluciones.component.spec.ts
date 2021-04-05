import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDevolucionesComponent } from './vista-devoluciones.component';

describe('VistaDevolucionesComponent', () => {
  let component: VistaDevolucionesComponent;
  let fixture: ComponentFixture<VistaDevolucionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaDevolucionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDevolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
