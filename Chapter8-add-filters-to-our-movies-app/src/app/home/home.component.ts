import { Component, effect, inject, viewChild } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { Movie } from '../model/movie.model';
import { MoviesService } from '../services/movies.service';
import { FavoritesService } from '../services/favorites.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HighlightDirective,
    MovieItemComponent,
    AsyncPipe,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  movieService = inject(MoviesService);
  protected movies$: Observable<Movie[]> = this.movieService.getMovies();
  protected favoritesService = inject(FavoritesService);
  form = viewChild<NgForm>('form');
  constructor() {
    effect(() => {
      this.form()?.valueChanges?.subscribe((formValue) => {
        this.movies$ = this.movieService.filterMovieList(formValue.title, formValue.releaseDate.toString());
      });
    })
  }
}
