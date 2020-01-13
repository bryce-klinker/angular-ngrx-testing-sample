import {
  Action,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {APP_ACTION_TYPES} from '../actions';

export interface AppState {
  count: number;
}

const initialState = 0;

function countReducer(state: number = initialState, action: Action): number {
  switch (action.type) {
    case APP_ACTION_TYPES.INCREMENT:
      return state + 1;
    case APP_ACTION_TYPES.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export const selectCount = (state: AppState) => state.count;

export const reducers: ActionReducerMap<AppState> = {
  count: countReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
