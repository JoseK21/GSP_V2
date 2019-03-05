import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TRetiradoComponent } from './t-retirado.component';

describe('TRetiradoComponent', () => {
  let component: TRetiradoComponent;
  let fixture: ComponentFixture<TRetiradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TRetiradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TRetiradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
