import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { StorageService } from "app/services/storage.service";
import { HueConfiguration } from "app/models/hue-configuration";
import { HueError } from 'app/models/hue-error';

@Component({
  selector: 'app-configuration-page',
  templateUrl: './configuration-page.component.html',
  styleUrls: ['./configuration-page.component.scss']
})
export class ConfigurationPageComponent implements OnInit {

  public hueError: HueError;
  public userName: string;
  public hueConfig: HueConfiguration;

  constructor(
    private http: HttpClient,
    private storageService: StorageService, 
    private ref: ChangeDetectorRef) {

      this.hueConfig = new HueConfiguration('', 'myhuelights', 'computer', '');
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
            this.ref.markForCheck();
        });
    }
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
            this.hueError = response.error;
            this.ref.markForCheck();
          } else if (response.success) {
            this.hueError = null;
            const userName = response.success.username;
            this.hueConfig = new HueConfiguration(
              ipAddr, appName, devName, userName
            );
          }
        },
        error => console.log('error: ', error),
        () => console.log('complete')
      );
  }

  saveConfiguration(): void {
    this.storageService.set('hue-configuration', this.hueConfig);
}

  deleteConfiguration(): void {
    this.storageService.remove('hue-configuration');
  }
}
