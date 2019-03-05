import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DCrearComponent } from './d-crear.component';

describe('DCrearComponent', () => {
  let component: DCrearComponent;
  let fixture: ComponentFixture<DCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
