import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEliminarComponent } from './c-eliminar.component';

describe('CEliminarComponent', () => {
  let component: CEliminarComponent;
  let fixture: ComponentFixture<CEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
