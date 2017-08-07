import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main';
import { APP_PROVIDERS } from './app.providers';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>',
  providers: APP_PROVIDERS
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

export const routing = RouterModule.forRoot(routes);
