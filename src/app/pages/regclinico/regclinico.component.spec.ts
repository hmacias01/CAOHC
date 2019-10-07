import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegclinicoComponent } from './regclinico.component';

describe('RegclinicoComponent', () => {
  let component: RegclinicoComponent;
  let fixture: ComponentFixture<RegclinicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegclinicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegclinicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
