import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MListaComponent } from './m-lista.component';

describe('MListaComponent', () => {
  let component: MListaComponent;
  let fixture: ComponentFixture<MListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
