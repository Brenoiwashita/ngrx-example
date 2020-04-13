import { ActionReducerMap } from '@ngrx/store';

import * as example from './../features/example/state';
import * as pokemons from './pokemons';

export interface AppState {
  example: example.reducer.ExampleState;
  pokemons: pokemons.reducer.PokemonsState;
}

export const reducers: ActionReducerMap<AppState> = {
  example: example.reducer.exampleReducer,
  pokemons: pokemons.reducer.pokemonsReducer
};

export const effects: Array<any> = [example.ExampleEffects, pokemons.effects];

export const initialState = {
  example: example.reducer.exampleInitialState(),
  pokemons: pokemons.reducer.initialState
};
