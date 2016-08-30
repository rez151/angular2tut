/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';

describe('App: ScotchyScotch', () => {
  beforeEach(() => {
    addProviders([HeroesComponent]);
  });

  it('should create the app',
    inject([HeroesComponent], (app: HeroesComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'app works!\'',
    inject([HeroesComponent], (app: HeroesComponent) => {
      expect(app.title).toEqual('app works!');
    }));
});
