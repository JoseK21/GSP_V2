import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { REliminarComponent } from './r-eliminar.component';

describe('REliminarComponent', () => {
  let component: REliminarComponent;
  let fixture: ComponentFixture<REliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ REliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(REliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
