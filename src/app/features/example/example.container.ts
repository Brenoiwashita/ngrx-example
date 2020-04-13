import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Import everything from example's state module to make it easy to use actions and selectors
 */
import * as fromExample from './state';

@Component({
  selector: 'app-example',
  templateUrl: './example.container.html',
  styleUrls: ['./example.container.scss']
})
export class ExampleContainerComponent implements OnInit, OnDestroy {
  formExample: FormGroup;

  /**
   * Creates subscription to store all subscriptions for this component
   * Makes it easy to unsubscribe everything after the component is destroyed
   */
  private subscription = new Subscription();

  constructor(private store$: Store<fromExample.reducer.ExampleState>, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.subscribeToTodos();
    this.addInitialTodo();
  }

  /**
   * Must always unsubscribe when the component is destroyed
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Create a subscription for a certain part of the state using a selector
   * Pipe operators can be used here like "filter", "distinctUntilChanged", "pairwise", etc
   */
  subscribeToTodos(): void {
    this.subscription.add(
      this.store$.pipe(select(fromExample.selectors.selectEntities)).subscribe(state => {
        /**
         * In this case, "state" could be named anything, it is simply the response of the selector
         */
      })
    );
  }

  /**
   * Creates a reactive form for example
   */
  createForm() {
    this.formExample = this.formBuilder.group({
      text: [{ value: null, disabled: true }, [Validators.required]],
      select: [null, [Validators.required]],
      checkbox: [null],
      radio: [null],
      datepicker: [null, [Validators.required]]
    });
  }

  /**
   * Action to dispatch an action to our state, it doesn't matter if it's an effect or reducer action
   * the application always know which one to call
   */
  addInitialTodo(): void {
    this.store$.dispatch(
      new fromExample.actions.ActionCreator({
        newTodo: {
          id: '2',
          description: 'Lorem Ipsum',
          status: 'A'
        }
      })
    );
  }
}
