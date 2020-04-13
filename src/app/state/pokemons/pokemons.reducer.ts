import { PokemonsActions, PokemonsActionsTypes } from './pokemons.actions';

export interface Pokemons {
  name: string | null;
  url: string | null;
}

export interface PokemonsState {
  lista: Pokemons[];
  name: string | null;
  weight: number | null;
  height: number | null;
}

export const initialState = {
  lista: [],
  name: null,
  weight: null,
  height: null
};

export function pokemonsReducer(state = initialState, action: PokemonsActions): PokemonsState {
  switch (action.type) {
    case PokemonsActionsTypes.LISTAR_POKEMONS_SUCESSO: {
      return {
        ...state,
        lista: action.payload.lista
      };
    }

    case PokemonsActionsTypes.DETALHES_POKEMONS_SUCESSO: {
      return {
        ...state,
        name: action.payload.detalhes.name,
        height: action.payload.detalhes.height,
        weight: action.payload.detalhes.weight
      };
    }

    case PokemonsActionsTypes.RESET: {
      return {
        ...state,
        name: null,
        height: null,
        weight: null
      };
    }

    default:
      return state;
  }
}
