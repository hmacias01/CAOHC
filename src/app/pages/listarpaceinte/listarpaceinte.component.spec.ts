import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarpaceinteComponent } from './listarpaceinte.component';

describe('ListarpaceinteComponent', () => {
  let component: ListarpaceinteComponent;
  let fixture: ComponentFixture<ListarpaceinteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarpaceinteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarpaceinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
