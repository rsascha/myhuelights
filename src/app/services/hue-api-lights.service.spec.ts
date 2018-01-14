import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HueApiLightsService } from './hue-api-lights.service';
import { HttpClient } from '@angular/common/http';

describe('HueApiLightsService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HueApiLightsService
      ]
    });
  });

  describe('getAllLights()', () => {

    it('should return an Observable<Array<any>>',
        inject(
          [
            HttpClient, 
            HttpTestingController, 
            HueApiLightsService],
          (
            http: HttpClient, 
            httpMock: HttpTestingController) => {

        const mockResponse = {
          data: [
            { id: 0, name: 'Light 5' },
            { id: 1, name: 'Light 1' },
            { id: 2, name: 'Light 2' },
            { id: 3, name: 'Light 3' },
          ]
        };
        const url = 'http://192.168.179.26/api/87aUe0Z6FtEfP4LBC4-Q9jNIucJ0Z5O-lrkcBiJe/lights';
        http
          .get(url)
          .subscribe(data => expect(data).toEqual(mockResponse));
        const request = httpMock.expectOne(url);

        const hueApiLightsService = new HueApiLightsService(http);
        hueApiLightsService.getAllLights().subscribe((lights) => {
          
          debugger;
          request.flush(mockResponse);
          httpMock.verify();

          // TODO: I don't know how the new testing framework is working - I will take a look later 
          // https://angular.io/guide/http#testing-http-requests
          expect(lights.length).toBe(4);
          expect(lights[0].name).toEqual('Light 0');
          expect(lights[1].name).toEqual('Light 1');
          expect(lights[2].name).toEqual('Light 2');
          expect(lights[3].name).toEqual('Light 3');
        });

      })) // it
  
  }) // describe

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    //httpMock.verify();
  }));

});
