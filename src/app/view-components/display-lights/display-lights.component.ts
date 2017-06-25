import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-display-lights',
  templateUrl: './display-lights.component.html',
  styleUrls: ['./display-lights.component.scss']
})
export class DisplayLightsComponent implements OnInit {

  @Input()
  lights: Observable<Array<any>>;

  @Output()
  onSwitchLight = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  switchLight(id: number, switchTo: boolean) {
    this.onSwitchLight.emit({
      id,
      switchTo
    });
  }

}
