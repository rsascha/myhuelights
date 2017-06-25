import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LightsPageComponent } from 'app/page-components/lights-page/lights-page.component';
import { GroupsPageComponent } from 'app/page-components/groups-page/groups-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'lights'
  },
  {
    path: 'lights',
    component: LightsPageComponent
  },
  {
    path: 'groups',
    component: GroupsPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
