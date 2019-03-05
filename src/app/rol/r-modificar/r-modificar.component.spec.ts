import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RModificarComponent } from './r-modificar.component';

describe('RModificarComponent', () => {
  let component: RModificarComponent;
  let fixture: ComponentFixture<RModificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RModificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
