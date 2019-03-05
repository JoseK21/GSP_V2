import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DActualizarComponent } from './d-actualizar.component';

describe('DActualizarComponent', () => {
  let component: DActualizarComponent;
  let fixture: ComponentFixture<DActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
