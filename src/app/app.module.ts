import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HueApiLightsService } from './services/hue-api-lights.service';
import { DisplayLightsComponent } from './view-components/display-lights/display-lights.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { LightsPageComponent } from './page-components/lights-page/lights-page.component';
import { 
  startWith, 
  filter, 
  map, 
  debounceTime, 
  distinctUntilChanged, 
  combineLatest 
} from 'rxjs/operators';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/of';
import { GroupsPageComponent } from './page-components/groups-page/groups-page.component';
import { HueApiConfigurationService } from 'app/services/hue-api-configuration.service';
import { StorageService } from 'app/services/storage.service';
import { ConfigurationPageComponent } from './page-components/configuration-page/configuration-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayLightsComponent,
    LightsPageComponent,
    GroupsPageComponent,
    ConfigurationPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HueApiLightsService,
    HueApiConfigurationService,
    StorageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
