import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLightsComponent } from './display-lights.component';

describe('DisplayLightsComponent', () => {
  let component: DisplayLightsComponent;
  let fixture: ComponentFixture<DisplayLightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayLightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
