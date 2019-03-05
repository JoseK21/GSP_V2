import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MActualizarComponent } from './m-actualizar.component';

describe('MActualizarComponent', () => {
  let component: MActualizarComponent;
  let fixture: ComponentFixture<MActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
