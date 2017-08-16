import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main';
import {TempoComponent} from './tempo/tempo';
import { APP_PROVIDERS } from './app.providers';

@Component({
  selector: 'fountain-root',
  templateUrl: './app/routes.html',
  providers: APP_PROVIDERS
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'tempo',
    component: TempoComponent
  }
];

export const routing = RouterModule.forRoot(routes);
