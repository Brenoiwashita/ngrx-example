import { Action } from '@ngrx/store';

export enum PokemonsActionsTypes {
  RESET = '[Pokemons] Reset',

  LISTAR_POKEMONS = '[Pokemons] Listar',
  LISTAR_POKEMONS_SUCESSO = '[Pokemons] Listar sucesso',

  DETALHES_POKEMONS = '[Pokemons] Detalhes',
  DETALHES_POKEMONS_SUCESSO = '[Pokemons] Detalhes sucesso'
}

export class ResetPokemons implements Action {
  readonly type = PokemonsActionsTypes.RESET;
  constructor() {}
}

export class ListarPokemons implements Action {  
  readonly type = PokemonsActionsTypes.LISTAR_POKEMONS;
  constructor() {}
  
}

export class ListarPokemonsSucesso implements Action {
  readonly type = PokemonsActionsTypes.LISTAR_POKEMONS_SUCESSO;
  constructor(public payload: any) {}
}

export class DetalhesPokemons implements Action {
  readonly type = PokemonsActionsTypes.DETALHES_POKEMONS;
  constructor(public payload: { id: string }) {}
}

export class DetalhesPokemonsSucesso implements Action {
  readonly type = PokemonsActionsTypes.DETALHES_POKEMONS_SUCESSO;
  constructor(public payload: any) {}
}

export type PokemonsActions =
  | ListarPokemons
  | ListarPokemonsSucesso
  | DetalhesPokemons
  | DetalhesPokemonsSucesso
  | ResetPokemons;
