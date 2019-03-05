import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RIngresarComponent } from './r-ingresar.component';

describe('RIngresarComponent', () => {
  let component: RIngresarComponent;
  let fixture: ComponentFixture<RIngresarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RIngresarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RIngresarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
