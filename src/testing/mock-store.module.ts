import { ActionReducerMap, MetaReducer, StoreModule, ReducerManager } from '@ngrx/store';
import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { initReducer } from './mock.init.reducer';

const reducers: ActionReducerMap<unknown> = {};
const metaReducers: MetaReducer<unknown>[] = [];

@NgModule({
  imports: [StoreModule.forRoot(reducers, { metaReducers })]
})
export class MockStoreModule {
  static forRoot(featureName: string, initialState: unknown): ModuleWithProviders {
    return {
      ngModule: MockStoreModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: initReducer(featureName, initialState),
          deps: [ReducerManager],
          multi: true
        }
      ]
    };
  }
}
