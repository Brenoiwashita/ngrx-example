import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of, throwError } from 'rxjs';
import { ExampleEffects } from './example.effects';
import { ExampleService } from '../services/example.service';

import * as ExampleActions from './example.actions';

describe('Example Effects', () => {
  let exampleService: ExampleService;
  let effects: ExampleEffects;
  let actions: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExampleEffects, ExampleService, provideMockActions(() => actions)]
    });

    effects = TestBed.get(ExampleEffects);
    exampleService = TestBed.get(ExampleService);
  });

  it('should add todo on success', () => {
    const newTodo = {
      newTodo: {
        id: '2',
        description: 'Lorem Ipsum',
        status: 'A'
      }
    };
    const action = new ExampleActions.ActionCreator(newTodo);
    const outcome = new ExampleActions.ActionCreatorSuccess(newTodo);

    actions = hot('--a', { a: action });
    const expected = cold('--b', { b: outcome });

    expect(effects.effectName$).toBeObservable(expected);
  });

  it('should add todo on error', () => {
    const error = new Error();
    const response = cold('-#|', {}, error);
    spyOn(exampleService, 'addTodo').and.returnValue(response);

    const newTodo = {
      newTodo: {
        id: '2',
        description: 'Lorem Ipsum',
        status: 'A'
      }
    };
    const action = new ExampleActions.ActionCreator(newTodo);
    const outcome = new ExampleActions.ActionCreatorError(error);

    actions = hot('-(a|)', { a: action });
    const expected = cold('--(b|)', { b: outcome });

    expect(effects.effectName$).toBeObservable(expected);
  });
});
