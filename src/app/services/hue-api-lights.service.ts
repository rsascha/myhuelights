import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import _ from 'lodash';

@Injectable()
export class HueApiLightsService {

  // TODO: Refactoring
  private config = {
    HueService: {
      IpAddress: '192.168.179.26',
      ApiKey: '87aUe0Z6FtEfP4LBC4-Q9jNIucJ0Z5O-lrkcBiJe',
    }
  };

  // TODO: Refactoring
  private API_PATH =
    'http://' + this.config.HueService.IpAddress + '/api/' + this.config.HueService.ApiKey;

  constructor(private http: HttpClient) { }

  // https://www.developers.meethue.com/documentation/lights-api#11_get_all_lights
  getAllLights(): Observable<Array<any>> {
    const url = this.API_PATH + '/lights';
    return this.http.get(url)
      .map(res => {

        console.log('getAllLights() res: ', res);

        const result = [];
        _.mapKeys(res, (value, key) => {
          result.push(_.merge({ id: key}, value));
        });
        return result;
      });
  }

  // https://www.developers.meethue.com/documentation/lights-api#16_set_light_state
  setLightState(id: number, state: boolean): Observable<any> {
    const url = this.API_PATH + '/lights/' + id + '/state';
    return this.http.put(url, { on: state });
  }

}
