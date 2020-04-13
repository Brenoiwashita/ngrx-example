import { ExampleActions, ExampleActionsType } from './example.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

/**
 * Create interfaces
 */
export interface Example {
  id: string;
  description: string;
  status: string;
}

export const exampleAdapter = createEntityAdapter<Example>();

export interface ExampleState extends EntityState<Example> {
  total: number;
}

export function exampleInitialState(): ExampleState {
  return exampleAdapter.getInitialState({
    ids: ['1'],
    entities: {
      1: {
        id: '1',
        description: 'Lorem Ipsum',
        status: 'A'
      }
    },
    total: 1
  });
}

/**
 * Example's Reducer
 */
export function exampleReducer(state: ExampleState = exampleInitialState(), action: ExampleActions) {
  switch (action.type) {
    case ExampleActionsType.ACTION_CONST_SUCCESS: {
      return exampleAdapter.addOne(action.payload.newTodo, {
        ...state,
        total: state.total + 1
      });
    }

    default:
      return state;
  }
}
