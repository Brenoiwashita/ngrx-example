import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ActionCreator, ActionCreatorSuccess, ActionCreatorError, ExampleActionsType } from './example.actions';
import { ExampleService } from '../services/example.service';
import { of } from 'rxjs';

@Injectable()
export class ExampleEffects {
  constructor(private action$: Actions, private exampleService: ExampleService) {}

  @Effect()
  effectName$ = this.action$.pipe(
    ofType<ActionCreator>(ExampleActionsType.ACTION_CONST),
    switchMap(action =>
      /**
       * Here we should call a service method instead of this mock
       */
      this.exampleService.addTodo(action.payload).pipe(
        map(res => new ActionCreatorSuccess(res)),
        catchError(err => of(new ActionCreatorError(err)))
      )
    )
  );
}
