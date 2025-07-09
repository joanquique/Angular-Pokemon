import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, PokemonSearchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon-app';
}
