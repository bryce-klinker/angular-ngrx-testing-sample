import {createAction} from '@ngrx/store';

export const APP_ACTION_TYPES = {
  INCREMENT: '[App] Increment',
  DECREMENT: '[App] Decrement'
};

export const incrementAction = createAction(APP_ACTION_TYPES.INCREMENT);
export const decrementAction = createAction(APP_ACTION_TYPES.DECREMENT);
