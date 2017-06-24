import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
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
          resolve(_.values(this.response));
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

  ngOnInit() {
    this.loadData()
      .then(data => this.items = data)
      .then(() => this.initSortOrder()); 
  }

  onRefresh() {
    this.loadData()
      .then(data => this.items = data)
      .then(() => this.initSortOrder()); 
  }

  onTurnOn(item: any) {
    return new Promise((resolve, reject) => { 
    console.log(item);
    const url = API_PATH + '/lights/' + item.uniqueid + '/state';
    this.http.put(url, { on: true })
        .subscribe(response => this.response = response.json(), 
        err => {
          console.log('error during http request: ', url, err)
          reject(err);
        }, 
        () => {
          console.log('received response from: ', url, ' response: ', this.response);
          
          resolve(_.values(this.response));
        }
      )
    })
  }

  onTurnOff(item: any) {
    console.log(item);
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

