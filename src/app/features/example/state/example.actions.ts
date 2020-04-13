import { Action } from '@ngrx/store';

export enum ExampleActionsType {
  ACTION_CONST = 'ACTION_CONST',
  ACTION_CONST_SUCCESS = 'ACTION_CONST SUCCESS',
  ACTION_CONST_ERROR = 'ACTION_CONST ERROR'
}

export class ActionCreator implements Action {
  readonly type = ExampleActionsType.ACTION_CONST;
  constructor(
    public payload: {
      newTodo: {
        id: string;
        description: string;
        status: string;
      };
    }
  ) {}
}

export class ActionCreatorSuccess implements Action {
  readonly type = ExampleActionsType.ACTION_CONST_SUCCESS;
  constructor(public payload: any) {}
}

export class ActionCreatorError implements Action {
  readonly type = ExampleActionsType.ACTION_CONST_ERROR;
  constructor(public payload: any) {}
}

export type ExampleActions = ActionCreator | ActionCreatorSuccess | ActionCreatorError;
