import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as UsersActions from './users.actions';
import { getUsersError } from "./users.selectors";
import * as UsersSelectors from './users.selectors';

@Injectable()
export class UsersFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(UsersSelectors.getUsersLoaded));
  user$ = this.store.pipe(select(UsersSelectors.getUser));
  selectedUsers$ = this.store.pipe(select(UsersSelectors.getSelected));
  email$ = this.store.pipe(select(UsersSelectors.getEmail));
  error$ = this.store.pipe(select(UsersSelectors.getUsersError));

  constructor(private readonly store: Store) {
    this.store.dispatch(UsersActions.init());
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
