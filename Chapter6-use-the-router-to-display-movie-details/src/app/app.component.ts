import {Component, inject, Signal} from '@angular/core';
import {MovieItemComponent} from './movie-item/movie-item.component';
import {Movie} from './model/movie.model';
import {MoviesService} from './services/movies.service';
import {HighlightDirective} from './highlight.directive';
import {FavoritesService} from './services/favorites.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,

  templateUrl: 'app.component.html',
  imports: [
    MovieItemComponent, HighlightDirective, RouterModule
  ]
})
export class AppComponent {

  protected movies: Signal<Movie[]> = inject(MoviesService).getMovies();
  protected favoritesService = inject(FavoritesService);

}
