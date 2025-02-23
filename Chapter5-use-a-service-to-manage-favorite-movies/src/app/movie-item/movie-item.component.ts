import { FavoritesService } from './../services/favorites.service';
import { Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { Movie } from '../model/movie.model';
import { MillionDollarPipe } from '../pipes/million-dollar.pipe';
import { MinToDurationPipe } from '../pipes/min-to-duration.pipe';

@Component({
  selector: 'app-movie-item',
  template: `
    <div class="movie-item">
      <div>
        <h4> <span class="icon-star" #star (click)="toggleFavorite()" [class.active]="favoritesService.isFavorite(movie().id)"></span> {{ movie().title }}</h4>
        <small class="subtitle">
          <span>Release date: {{ movie().release_date }}</span>
          <span>Budget:  {{ movie().budget | millionDollar }} </span>
          <span>Duration: {{ movie().duration | minToDuration }}</span>
        </small>
      </div>

      <button>Details</button>
    </div>
  `,
  standalone: true,
  imports: [
    MillionDollarPipe,
    MinToDurationPipe
  ],
  styleUrls: ['movie-item.component.scss']
})
export class MovieItemComponent {
  favoritesService = inject(FavoritesService);
  movie = input.required<Movie>();
  starElement = viewChild<ElementRef>('star');
  toggleFavorite () {
    this.favoritesService.toggleFavorite(this.movie().id);
  }
}

