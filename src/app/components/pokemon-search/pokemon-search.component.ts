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
    const name = this.pokemonName.trim().toLowerCase();

    if (!name) {
      this.errorMessage = 'Por favor ingresa un nombre válido.';
      return;
    }

    // Verificar cache en sessionStorage
    const cached = sessionStorage.getItem(name);
    if (cached) {
      this.pokemonData = JSON.parse(cached);
      this.errorMessage = '';
      this.isLoading = false;
      this.animateCard = false;
      setTimeout(() => {
        this.animateCard = true;
      }, 0);
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.pokemonData = null;

    this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .subscribe({
        next: (data) => {
          this.pokemonData = data;
          // Guardar en sessionStorage
          sessionStorage.setItem(name, JSON.stringify(data));

          this.animateCard = false;
          this.isLoading = false;
          setTimeout(() => {
            this.animateCard = true;
          }, 0);
        },
        error: (err) => {
          this.errorMessage = 'No se encontró el Pokémon.';
          this.isLoading = false;
        }
      });
  }
}
