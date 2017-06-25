import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { StorageService } from "app/services/storage.service";
import { HueConfiguration } from "app/models/hue-configuration";

@Component({
  selector: 'app-configuration-page',
  templateUrl: './configuration-page.component.html',
  styleUrls: ['./configuration-page.component.scss']
})
export class ConfigurationPageComponent implements OnInit {

  public alerts: Array<string>;
  public userName: string;

  public hueConfig: HueConfiguration;

  constructor(
    private http: Http,
    private storageService: StorageService
  ) {
    this.alerts = new Array<string>();
  }

  ngOnInit() {
    this.hueConfig = this.storageService.get('hue-configuration');
    console.log(this.hueConfig);
  }

  onTestIpAddr(ipAddr: string, appName: string, devName: string): void {
    this.http.post('http://' + ipAddr + '/api', {
        devicetype: appName + '#' + devName
      })
      .map(response => response.json())
      .map(response => response[0])
      .subscribe(
        response => { 
          console.log('response: ', response)
          if (response.error) {
            this.alerts.push(response.error.description);
          } else if (response.success) {
            this.alerts = [];
            const userName = response.success.username;
            this.hueConfig = new HueConfiguration(
              ipAddr, appName, devName, userName
            );
            this.storageService.set(
              'hue-configuration', 
              this.hueConfig);
          }
        },
        error => console.log('error: ', error),
        () => console.log('complete')
      );
  }
}
