import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/interfaces/movie';
@Pipe({
  name: 'categoryFilter',
  standalone: true
})
export class CategoryFilterPipe implements PipeTransform {

  transform(movies: Movie[], selectedCategory: string): Movie[] {
    if (!movies || !Array.isArray(movies)) {
      return [];
    }
    if (!selectedCategory || selectedCategory.trim() === '') {
      return movies;
    }
    return movies.filter(movie =>
      movie.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }
}
