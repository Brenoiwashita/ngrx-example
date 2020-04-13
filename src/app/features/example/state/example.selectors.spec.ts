import * as selectors from './example.selectors';
import * as reducer from './example.reducer';

describe('Example Selectors', () => {
  const store = jasmine.createSpyObj('store', ['select']);

  it('should return call to selectExampleState', () => {
    const selector = selectors.selectExampleState;
    store.select(selector);
    expect(store.select).toHaveBeenCalledWith(selector);
  });

  it('should return call to selectTotalTodos', () => {
    const selector = selectors.selectTotalTodos;
    store.select(selector);
    expect(store.select).toHaveBeenCalledWith(selector);
  });

  it('should return call to selectTotalTodos and expect a return equal to 5', () => {
    const selector = selectors.selectTotalTodos;
    expect(selector.projector({ total: 5 })).toEqual(5);
  });

  it('should return call to selectTotal', () => {
    const selector = selectors.selectTotal;
    store.select(selector);
    expect(store.select).toHaveBeenCalledWith(selector);
  });

  it('should return call to selectIds', () => {
    const selector = selectors.selectIds;
    store.select(selector);
    expect(store.select).toHaveBeenCalledWith(selector);
  });

  it('should return call to selectEntities', () => {
    const selector = selectors.selectEntities;
    store.select(selector);
    expect(store.select).toHaveBeenCalledWith(selector);
  });

  it('should return call to selectAll', () => {
    const selector = selectors.selectAll;
    store.select(selector);
    expect(store.select).toHaveBeenCalledWith(selector);
  });
});
