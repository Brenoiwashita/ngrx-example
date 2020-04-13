import { createSelector } from '@ngrx/store';
import { AppState } from '..';

export const selectPokemons = (state: AppState) => state.pokemons;

export const selectPokemonsLista = createSelector(
  selectPokemons,
  state => state.lista
);

export const selectPokemonName = createSelector(
  selectPokemons,
  state => state.name
);

export const selectPokemonHeight = createSelector(
  selectPokemons,
  state => state.height
);
