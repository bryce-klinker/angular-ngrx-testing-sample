import {Action, combineReducers, INIT} from '@ngrx/store';
import {AppState, reducers} from '../app/reducers';

export function createState(...actions: Action[]): AppState {
  const reducer = combineReducers(reducers);
  return actions.reduce((state, action) => reducer(state, action), reducer(undefined, {type: INIT }));
}
