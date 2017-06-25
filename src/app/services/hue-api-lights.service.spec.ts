import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HueApiLightsService } from './hue-api-lights.service';

describe('HueApiLightsService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        HueApiLightsService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  describe('getAllLights()', () => {

    it('should return an Observable<Array<any>>',
        inject([HueApiLightsService, XHRBackend], (hueApiLightsService, mockBackend) => {

        const mockResponse = {
          data: [
            { id: 0, name: 'Light 0' },
            { id: 1, name: 'Light 1' },
            { id: 2, name: 'Light 2' },
            { id: 3, name: 'Light 3' },
          ]
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        hueApiLightsService.getAllLights().subscribe((lights) => {
          expect(lights.length).toBe(4);
          expect(lights[0].name).toEqual('Light 0');
          expect(lights[1].name).toEqual('Light 1');
          expect(lights[2].name).toEqual('Light 2');
          expect(lights[3].name).toEqual('Light 3');
        });
    })) // it
  
  }) // describe

});
