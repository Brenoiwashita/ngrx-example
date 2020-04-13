import { ReducerManager } from '@ngrx/store';
import { createMockReducer } from './mock.reducer';

export function initReducer(featureName: string, initialState: unknown) {
  return (reducer: ReducerManager) => {
    return () =>
      new Promise((resolve, reject) => {
        reducer.addReducer(featureName, createMockReducer(initialState));
        resolve('mocked reducer');
      });
  };
}
