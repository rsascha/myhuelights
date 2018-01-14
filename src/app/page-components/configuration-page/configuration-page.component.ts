import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { StorageService } from "app/services/storage.service";
import { HueConfiguration } from "app/models/hue-configuration";

@Component({
  selector: 'app-configuration-page',
  templateUrl: './configuration-page.component.html',
  styleUrls: ['./configuration-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigurationPageComponent implements OnInit {

  public alerts: Array<string>;
  public userName: string;
  public hueConfig: HueConfiguration;
  public ipAddress: string;

  constructor(
    private http: HttpClient,
    private storageService: StorageService, 
    private ref: ChangeDetectorRef) {

      this.hueConfig = new HueConfiguration('test', '', '', '');
      this.hueConfig.ipAddress = 'tt';
      console.log(this.hueConfig);
      this.alerts = new Array<string>();
  }

  ngOnInit() {

    const conf = this.storageService.get('hue-configuration');
    if (conf) {
      this.hueConfig = conf;
    } else {
      this.http.get('https://www.meethue.com/api/nupnp')
        .map(response => response[0])
        .subscribe(response => {
            console.log(response);
            this.hueConfig.ipAddress = response.internalipaddress;
            this.ipAddress = response.internalipaddress;
            // https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html
            this.alerts.push('test');
            console.log(this.hueConfig);
            this.ref.markForCheck();
        });
    }
    console.log(this.hueConfig);
  }

  onTestIpAddr(ipAddr: string, appName: string, devName: string): void {
    
    this.http.post('http://' + ipAddr + '/api', {
        devicetype: appName + '#' + devName
      })
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

  deleteConfiguration(): void {
    this.storageService.remove('hue-configuration');
  }
}
