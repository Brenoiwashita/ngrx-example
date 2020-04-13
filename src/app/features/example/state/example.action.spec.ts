import * as actions from './example.actions';

describe('Example Actions', () => {
  const store = jasmine.createSpyObj('store', ['dispatch']);

  it('should create an action [ACTION_CONST]', () => {
    const action = new actions.ActionCreator({
      newTodo: {
        id: '1',
        description: '1',
        status: 'A'
      }
    });

    store.dispatch(action);

    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(action.type).toEqual(actions.ExampleActionsType.ACTION_CONST);
  });

  it('should create an action [ACTION_CONST_SUCCESS]', () => {
    const action = new actions.ActionCreatorSuccess({
      newTodo: {
        id: '1',
        description: '1',
        status: 'A'
      }
    });

    store.dispatch(action);

    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(action.type).toEqual(actions.ExampleActionsType.ACTION_CONST_SUCCESS);
  });

  it('should create an action [ACTION_CONST_ERROR]', () => {
    const action = new actions.ActionCreatorError({});

    store.dispatch(action);

    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(action.type).toEqual(actions.ExampleActionsType.ACTION_CONST_ERROR);
  });
});
