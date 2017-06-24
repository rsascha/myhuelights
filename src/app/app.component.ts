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

  ngOnInit() {
    const url = API_PATH + '/lights';
    this.http.get(url)
      .subscribe(response => this.response = response.json(), 
      err => console.log('error during http request: ', url, err), 
      () => {
        console.log('received response from: ', url);
        this.items = _.values(this.response);
      }
    );

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

