/**
 * Created by reserchr on 30.08.16.
 */

import { ModuleWithProviders }  from '@angular/core';
import { provideRouter } from '@angular/router';

import { HeroesComponent }      from './heroes/heroes.component';

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

