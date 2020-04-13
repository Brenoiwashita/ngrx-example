import * as reducer from './example.reducer';
import * as actions from './example.actions';

describe('Example Reducer', () => {
  const initialState = reducer.exampleInitialState();

  it('should return the default state', () => {
    const action = {} as any;
    const state = reducer.exampleReducer(undefined, action);

    Object.values(state.entities).forEach((entity, i) => {
      const initialEntity = Object.values(initialState.entities)[i];

      expect(entity.id).toBe(initialEntity.id);
      expect(entity.description).toBe(initialEntity.description);
      expect(entity.status).toBe(initialEntity.status);
    });
  });

  it('should add a todo', () => {
    const action = new actions.ActionCreatorSuccess({
      newTodo: {
        id: '2',
        description: 'Lorem Ipsum',
        status: 'A'
      }
    });
    const state = reducer.exampleReducer(initialState, action);

    expect(state.total).toEqual(2);
    expect(state.entities['2'].id).toEqual('2');
  });
});
