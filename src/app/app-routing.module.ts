import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonsDetalhesComponent } from './pokemons-detalhes/pokemons-detalhes.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonsComponent
  },
  {
    path: 'detalhes/:id',
    component: PokemonsDetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
