import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  constructor() {}

  /**
   * Returns a mocked observable to addTodo
   * @param payload
   */
  addTodo(payload) {
    return of(payload);
  }
}
