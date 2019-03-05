import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SModificarComponent } from './s-modificar.component';

describe('SModificarComponent', () => {
  let component: SModificarComponent;
  let fixture: ComponentFixture<SModificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SModificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
