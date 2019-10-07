import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngpacienteComponent } from './ingpaciente.component';

describe('IngpacienteComponent', () => {
  let component: IngpacienteComponent;
  let fixture: ComponentFixture<IngpacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngpacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
