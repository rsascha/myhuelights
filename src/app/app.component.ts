import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private response : Response;
  
  title = 'app works!';
  items;

  constructor(private http: Http) {}

  loadData() {
    return new Promise((resolve, reject) => { 
      const url = API_PATH + '/lights';
      this.http.get(url)
        .subscribe(response => this.response = response.json(), 
        err => {
          console.log('error during http request: ', url, err)
          reject(err);
        }, 
        () => {
          console.log('received response from: ', url);
          const result = [];
          // add key as ID to value
          _.mapKeys(this.response, (value, key) => {
            result.push(_.merge({ id: key}, value));
          });
          resolve(result);
        }
      )
    });
  }

  initSortOrder() {
    this.changeSortOrder('name');
  }

  changeSortOrder(orderby: string) {
    switch (orderby) {
      case 'state': 
        this.items = _.sortBy(this.items, 'state.on');
        break;
      default:
        this.items = _.sortBy(this.items, 'name');
    }
  }

  loadDataSync() {
    this.loadData()
      .then(data => this.items = data)
      .then(() => this.initSortOrder()); 
  }

  ngOnInit() {
    this.loadDataSync();
  }

  onRefresh() {
    this.loadDataSync();
  }

  onTurnOn(item: any) {
    console.log(item);
    const url = API_PATH + '/lights/' + item.id + '/state';
    const httpPut = this.http.put(url, { on: true }).toPromise()
      .then(response => this.response = response.json())
      .then(result => console.log(result[0].error))
      .then(() => this.loadDataSync());
  }

  onTurnOff(item: any) {
    console.log(item);
    const url = API_PATH + '/lights/' + item.id + '/state';
    const httpPut = this.http.put(url, { on: false }).toPromise()
      .then(response => this.response = response.json())
      .then(result => console.log(result[0].error))
      .then(() => this.loadDataSync());
  }

  onDetails(item: any) {
    console.log(item);
  }
}


export const config = {
	HueService: {
		IpAddress: '192.168.179.26', 
		ApiKey: '87aUe0Z6FtEfP4LBC4-Q9jNIucJ0Z5O-lrkcBiJe',
	}
}

export const API_PATH = 
		'http://' + config.HueService.IpAddress + '/api/' + config.HueService.ApiKey;

