import { MoviesService } from './services/movies.service';
import { Component, inject } from '@angular/core';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { Movie } from './model/movie.model';


@Component({
  selector: 'app-root',
  standalone: true,

  templateUrl: 'app.component.html',
  imports: [
    MovieItemComponent,
  ]
})
export class AppComponent {
  movies: Array<Movie> = inject(MoviesService).getMovies()();
  // movies:Signal<Array<Movie>> = signal(inject(MoviesService).getMovies()());
}
