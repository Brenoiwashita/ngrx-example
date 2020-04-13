import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleContainerComponent } from './example.container';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';

import * as fromExample from './state';

describe('ExampleComponent', () => {
  let component: ExampleContainerComponent;
  let fixture: ComponentFixture<ExampleContainerComponent>;
  let store: MockStore<any>;
  let dispatchSpy: jasmine.Spy;

  const initialState = {
    example: fromExample.reducer.exampleInitialState()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        }),
        HttpClientModule
      ],
      declarations: [ExampleContainerComponent],
      providers: [provideMockStore({ initialState })]
    });

    store = TestBed.get(Store);
    dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addInitialTodo', () => {
    const spy = spyOn(component, 'addInitialTodo').and.callThrough();
    component.addInitialTodo();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
