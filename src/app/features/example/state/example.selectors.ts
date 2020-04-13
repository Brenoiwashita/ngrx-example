import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromExample from './example.reducer';

/**
 * This is the base selector used to create other selectors related to this module
 */
export const selectExampleState = createFeatureSelector<fromExample.ExampleState>('example');

/**
 * This is a normal selector for a property inside the base selector
 */
export const selectTotalTodos = createSelector(
  selectExampleState,
  state => state.total
);

/**
 * These selectors are created inside the reducer because we are using Entities
 */
export const { selectIds, selectEntities, selectAll, selectTotal } = fromExample.exampleAdapter.getSelectors(
  selectExampleState
);
