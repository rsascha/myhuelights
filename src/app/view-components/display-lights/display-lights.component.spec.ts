import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLightsComponent } from './display-lights.component';

// It is not the best idea to inject the real pipe.
// TODO: Add a MockPipe to this project.
import { OrderbyPipe } from '../../pipes/orderby.pipe';

describe('DisplayLightsComponent', () => {
  let component: DisplayLightsComponent;
  let fixture: ComponentFixture<DisplayLightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayLightsComponent, OrderbyPipe ]
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

  it('should have switchLight', () => {
    expect(component.switchLight).toBeTruthy();    
  });

  it('should have toggleDetails', () => {
    expect(component.toggleDetails).toBeTruthy();
  });

});
