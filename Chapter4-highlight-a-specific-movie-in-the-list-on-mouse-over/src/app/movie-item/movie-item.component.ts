import { Component, ElementRef, inject, input, Renderer2, viewChild } from '@angular/core';
import { Movie } from '../model/movie.model';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-movie-item',
  template: `
    <div appHighlight class="movie-item">
      <div>
        <h4>{{ movie().title }}</h4>
        <small class="subtitle">
          <span>Release date: {{ movie().release_date }}</span>
          <span>Budget: $ {{ movie().budget }} million</span>
          <span>Duration: {{ movie().duration }} min</span>
        </small>
      </div>
      <button>Details</button>
    </div>
  `,
  standalone: true,
  styleUrls: ['movie-item.component.scss'],
  imports: [HighlightDirective]
})
export class MovieItemComponent {
  movie = input.required<Movie>();
}

