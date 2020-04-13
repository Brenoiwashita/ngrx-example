import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '@app/state';

import * as fromPokemons from '@app/state/pokemons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit, OnDestroy {
  list = [];

  private subscription = new Subscription();

  constructor(private router: Router, private store$: Store<AppState>) {}

  ngOnInit() {
    this.createSubscriptions();
    this.loadList();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  createSubscriptions(): void {
    this.subscription.add(
      this.store$.pipe(select(fromPokemons.selectors.selectPokemonsLista)).subscribe(data => {
        this.list = data;
      })
    );
  }

  loadList(): void {
    this.store$.dispatch(new fromPokemons.actions.ListarPokemons());
  }

  goToDetail(url: string): void {
    const id = this.getPokemonIdFromUrl(url);
    this.router.navigate(['/detalhes', id]);
  }

  getPokemonIdFromUrl(url: string): string {
    return url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
  }
}
