import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent {
  pokemonName: string = '';
  pokemonData?: Pokemon;
  isLoading: boolean = false;
  errorMessage: string = '';

  animateCard = false;

  constructor(private pokemonService: PokemonService) {}

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
    this.pokemonData = undefined;

    this.pokemonService.getPokemon(name).subscribe({
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
      error: () => {
        this.errorMessage = 'No se encontró el Pokémon.';
        this.isLoading = false;
      }
    });
  }
}
