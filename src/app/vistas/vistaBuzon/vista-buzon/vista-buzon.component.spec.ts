import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaBuzonComponent } from './vista-buzon.component';

describe('VistaBuzonComponent', () => {
  let component: VistaBuzonComponent;
  let fixture: ComponentFixture<VistaBuzonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaBuzonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaBuzonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
