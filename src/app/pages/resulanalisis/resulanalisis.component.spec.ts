import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResulanalisisComponent } from './resulanalisis.component';

describe('ResulanalisisComponent', () => {
  let component: ResulanalisisComponent;
  let fixture: ComponentFixture<ResulanalisisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResulanalisisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResulanalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
