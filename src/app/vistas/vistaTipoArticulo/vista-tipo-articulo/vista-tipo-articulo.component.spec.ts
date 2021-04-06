import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTipoArticuloComponent } from './vista-tipo-articulo.component';

describe('VistaTipoArticuloComponent', () => {
  let component: VistaTipoArticuloComponent;
  let fixture: ComponentFixture<VistaTipoArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaTipoArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaTipoArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
