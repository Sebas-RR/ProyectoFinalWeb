import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaViaticosComponent } from './vista-viaticos.component';

describe('VistaViaticosComponent', () => {
  let component: VistaViaticosComponent;
  let fixture: ComponentFixture<VistaViaticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaViaticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaViaticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
