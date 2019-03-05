import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SEliminarComponent } from './s-eliminar.component';

describe('SEliminarComponent', () => {
  let component: SEliminarComponent;
  let fixture: ComponentFixture<SEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
