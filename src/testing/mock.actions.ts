import { Action } from '@ngrx/store';
const MOCK_ACTION = '[MOCK] ACTION';

export class MockAction implements Action {
  readonly type = MOCK_ACTION;
  readonly payload: unknown;

  constructor(payload?: unknown) {
    this.payload = payload;
  }
}
