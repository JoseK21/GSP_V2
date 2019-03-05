import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DEliminarComponent } from './d-eliminar.component';

describe('DEliminarComponent', () => {
  let component: DEliminarComponent;
  let fixture: ComponentFixture<DEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
