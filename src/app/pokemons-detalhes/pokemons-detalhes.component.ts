import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/state';

import * as fromPokemons from '@app/state/pokemons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemons-detalhes',
  templateUrl: './pokemons-detalhes.component.html',
  styleUrls: ['./pokemons-detalhes.component.scss']
})
export class PokemonsDetalhesComponent implements OnInit, OnDestroy {
  pokemonId = this.route.snapshot.params.id;
  name: string;
  height: number;

  private subscription = new Subscription();

  constructor(private route: ActivatedRoute, private store$: Store<AppState>) {}

  ngOnInit() {
    this.store$.dispatch(new fromPokemons.actions.ResetPokemons());

    this.createSubscriptions();
    this.loadDetails();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  createSubscriptions() {
    this.subscription.add(
      this.store$.select(fromPokemons.selectors.selectPokemonName).subscribe(data => {
        this.name = data;
      })
    );

    this.subscription.add(
      this.store$.select(fromPokemons.selectors.selectPokemonHeight).subscribe(data => {
        this.height = data;
      })
    );
  }

  loadDetails() {
    this.store$.dispatch(new fromPokemons.actions.DetalhesPokemons({ id: this.pokemonId }));
  }
}
