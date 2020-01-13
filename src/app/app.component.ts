import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {AppState, selectCount} from './reducers';
import {Store} from '@ngrx/store';
import {decrementAction, incrementAction} from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentValue$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.currentValue$ = store.select(selectCount);
  }

  onIncrement() {
    this.store.dispatch(incrementAction());
  }

  onDecrement() {
    this.store.dispatch(decrementAction());
  }
}
