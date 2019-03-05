import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TNuevoComponent } from './t-nuevo.component';

describe('TNuevoComponent', () => {
  let component: TNuevoComponent;
  let fixture: ComponentFixture<TNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
