import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {configureTestingModule} from '../testing/configure-testing-module';
import {FakeStore} from '../testing/fake-store';
import {Store} from '@ngrx/store';
import {AppState} from './reducers';
import {decrementAction, incrementAction} from './actions';

describe('AppComponent', () => {
  let store: FakeStore<AppState>;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => configureTestingModule()));

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    getButtonByTestId('increment').click();

    expect(store.getActions()).toContain(incrementAction());
  });

  it(`should have as title 'ngrx-sample'`, () => {
    getButtonByTestId('decrement').click();

    expect(store.getActions()).toContain(decrementAction());
  });

  function getButtonByTestId(testId: string) {
    return fixture.debugElement.nativeElement
      .querySelector(`[data-testid="${testId}"]`);
  }
});
