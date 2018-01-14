import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { SwitchLightEvent } from 'app/events/switch-light-event';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-display-lights',
  templateUrl: './display-lights.component.html',
  styleUrls: ['./display-lights.component.scss']
})
export class DisplayLightsComponent implements OnInit {

  @Input()
  lights: Observable<Array<any>>;

  @Output()
  onSwitchLight = new EventEmitter<SwitchLightEvent>();

  constructor() { }

  ngOnInit() {
  }

  switchLight(id: number, switchTo: boolean) {
    this.onSwitchLight.emit(
      new SwitchLightEvent(id, switchTo));
  }

  toggleDetails(light) {
    if (light.showDetails) {
      light.showDetails = false;
    } else {
      light.showDetails = true;
    }
  }
}
