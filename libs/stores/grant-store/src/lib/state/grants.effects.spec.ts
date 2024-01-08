import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as GrantsActions from './grants.actions';
import { GrantsEffects } from './grants.effects';

describe('GrantsEffects', () => {
  let actions: Observable<Action>;
  let effects: GrantsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        GrantsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(GrantsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: GrantsActions.initGrants() });

      const expected = hot('-a-|', {
        a: GrantsActions.loadGrantsSuccess({ grants: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
