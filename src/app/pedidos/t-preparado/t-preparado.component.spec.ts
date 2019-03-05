import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TPreparadoComponent } from './t-preparado.component';

describe('TPreparadoComponent', () => {
  let component: TPreparadoComponent;
  let fixture: ComponentFixture<TPreparadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TPreparadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TPreparadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
