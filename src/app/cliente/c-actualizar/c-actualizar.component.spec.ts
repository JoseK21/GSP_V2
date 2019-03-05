import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CActualizarComponent } from './c-actualizar.component';

describe('CActualizarComponent', () => {
  let component: CActualizarComponent;
  let fixture: ComponentFixture<CActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
