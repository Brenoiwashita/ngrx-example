import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  baseURL = 'https://pokeapi.co/api/v2';

  constructor(private http$: HttpClient) {}

  listar() {
    return this.http$.get<any>(`${this.baseURL}/pokemon`);
  }

  detalhes(id: string) {
    return this.http$.get<any>(`${this.baseURL}/pokemon/${id}`);
  }
}
