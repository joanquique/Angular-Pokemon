import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent {
  pokemonName: string = '';
  pokemonData: any;
  isLoading: boolean = false;
  errorMessage: string = '';

  animateCard = false;

  constructor(private http: HttpClient) {}

  search() {
    if (!this.pokemonName.trim()) {
      this.errorMessage = 'Por favor ingresa un nombre válido.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.pokemonData = null;

    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName.toLowerCase()}`)
      .subscribe({
        next: (data) => {
          this.pokemonData = data;
          this.animateCard = false;
          this.isLoading = false;
          setTimeout(() => {
            this.animateCard = true; // activa animación
          }, 0);
        },
        error: (err) => {
          this.errorMessage = 'No se encontró el Pokémon.';
          this.isLoading = false;
        }
      });
  }
}
