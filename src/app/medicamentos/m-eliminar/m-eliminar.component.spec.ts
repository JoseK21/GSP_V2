import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MEliminarComponent } from './m-eliminar.component';

describe('MEliminarComponent', () => {
  let component: MEliminarComponent;
  let fixture: ComponentFixture<MEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
