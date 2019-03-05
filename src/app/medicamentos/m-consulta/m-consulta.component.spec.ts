import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MConsultaComponent } from './m-consulta.component';

describe('MConsultaComponent', () => {
  let component: MConsultaComponent;
  let fixture: ComponentFixture<MConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
