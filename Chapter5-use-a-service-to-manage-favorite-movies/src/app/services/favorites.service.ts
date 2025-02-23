import { Injectable, signal, WritableSignal } from '@angular/core';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favoriteMovies: WritableSignal<Array<string>> = signal([]);
  toggleFavorite(movie: string): void {
    if (this.isFavorite(movie)) {
      this.favoriteMovies.update(movies => movies.filter((m) => m !== movie));
    } else {
      this.favoriteMovies.update(movies => [...movies, movie]);
    }
  }

  isFavorite(movie: string): boolean {
    return _.includes(this.favoriteMovies(), movie);
  }
}
