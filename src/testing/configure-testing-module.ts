import {TestBed} from '@angular/core/testing';
import {MockReducerManager, MockState} from '@ngrx/store/testing';
import {Action, ActionsSubject, INITIAL_STATE, ReducerManager, StateObservable, Store} from '@ngrx/store';
import {createState} from './create-state';
import {FakeStore} from './fake-store';
import {AppModule} from '../app/app.module';

export function provideFakeStore(...actions: Action[]) {
  const state = createState(...actions);
  return [
    ActionsSubject,
    MockState,
    { provide: INITIAL_STATE, useValue: state },
    { provide: StateObservable, useValue: MockState },
    { provide: ReducerManager, useClass: MockReducerManager },
    { provide: Store, useClass: FakeStore }
  ];
}

export function configureTestingModule(...actions: Action[]) {
  TestBed.configureTestingModule({
    imports: [
      AppModule,
    ],
    providers: [
      provideFakeStore(...actions)
    ]
  });
}
