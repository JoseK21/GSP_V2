import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MCrearComponent } from './m-crear.component';

describe('MCrearComponent', () => {
  let component: MCrearComponent;
  let fixture: ComponentFixture<MCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
