import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HueApiLightsService } from 'app/services/hue-api-lights.service';
import { SwitchLightEvent } from 'app/events/switch-light-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public lights: Observable<Array<any>>;

  constructor(
    private hueApiLightsService: HueApiLightsService
  ) {}

  ngOnInit() {
    this.lights = this.hueApiLightsService.getAllLights();
  }

  switchLight(event: SwitchLightEvent) {
    this.hueApiLightsService.setLightState(event.id, event.switchTo)
      .subscribe(
        result  => console.log(result),
        err     => console.log(err),
        ()      => this.lights = this.hueApiLightsService.getAllLights()
    );
  }
}
