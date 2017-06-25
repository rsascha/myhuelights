import { TestBed, inject } from '@angular/core/testing';

import { HueApiLightsService } from './hue-api-lights.service';

describe('HueApiLightsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HueApiLightsService]
    });
  });

  it('should ...', inject([HueApiLightsService], (service: HueApiLightsService) => {
    expect(service).toBeTruthy();
  }));
});
