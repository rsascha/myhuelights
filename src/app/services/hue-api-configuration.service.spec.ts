import { TestBed, inject } from '@angular/core/testing';

import { HueApiConfigurationService } from './hue-api-configuration.service';

describe('HueApiConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HueApiConfigurationService]
    });
  });

  it('should ...', inject([HueApiConfigurationService], (service: HueApiConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
