import {Action, ActionsSubject, INITIAL_STATE, ReducerManager, Store} from '@ngrx/store';
import {MockState} from '@ngrx/store/testing';
import {Inject, Injectable} from '@angular/core';

@Injectable()
export class FakeStore<TState> extends Store<TState> {
  private actions: Action[] = [];

  constructor(
    private state$: MockState<TState>,
    actionsObserver: ActionsSubject,
    reducerManager: ReducerManager,
    @Inject(INITIAL_STATE) private initialState: TState) {
    super(state$, actionsObserver, reducerManager);
  }

  getActions(): Action[] {
    return this.actions;
  }

  dispatch<V extends Action>(action: V): void {
    this.actions.push(action);
    super.dispatch(action);
  }
}
