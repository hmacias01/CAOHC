import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtoscopiaComponent } from './otoscopia.component';

describe('OtoscopiaComponent', () => {
  let component: OtoscopiaComponent;
  let fixture: ComponentFixture<OtoscopiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtoscopiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtoscopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
