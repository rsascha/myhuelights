import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HueApiLightsService } from './services/hue-api-lights.service';
import { DisplayLightsComponent } from './view-components/display-lights/display-lights.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayLightsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    HueApiLightsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
