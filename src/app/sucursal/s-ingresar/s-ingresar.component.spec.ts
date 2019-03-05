import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SIngresarComponent } from './s-ingresar.component';

describe('SIngresarComponent', () => {
  let component: SIngresarComponent;
  let fixture: ComponentFixture<SIngresarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SIngresarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SIngresarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
