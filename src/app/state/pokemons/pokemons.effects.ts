import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { PokemonsService } from '@shared/services/pokemons/pokemons.service';

import * as actions from './pokemons.actions';

@Injectable()
export class PokemonsEffects {
  constructor(private actions$: Actions, private pokemonsService: PokemonsService) {}

  @Effect()
  listarPokemons$ = this.actions$.pipe(
    ofType<actions.ListarPokemons>(actions.PokemonsActionsTypes.LISTAR_POKEMONS),
    switchMap(() =>
      this.pokemonsService.listar().pipe(
        map(response => {
          return new actions.ListarPokemonsSucesso({ lista: response.results });
        }),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  detalhesPokemons$ = this.actions$.pipe(
    ofType<actions.DetalhesPokemons>(actions.PokemonsActionsTypes.DETALHES_POKEMONS),
    switchMap(action =>
      this.pokemonsService.detalhes(action.payload.id).pipe(
        map(response => {
          return new actions.DetalhesPokemonsSucesso({
            detalhes: {
              name: response.name,
              height: response.height,
              weight: response.weight
            }
          });
        }),
        catchError(() => EMPTY)
      )
    )
  );
}
