import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCrearComponent } from './c-crear.component';

describe('CCrearComponent', () => {
  let component: CCrearComponent;
  let fixture: ComponentFixture<CCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
