import { Component } from '@angular/core';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { NgIf } from "@angular/common";
import { Movie } from '../../models/interfaces/movie';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {

  constructor(private _ActivatedRoute: ActivatedRoute, private _MovieService: MovieService ) { }
  
  movieId: number = 0;
  movie: Movie|undefined;
  ngOnInit()
  {

    this._ActivatedRoute.paramMap.subscribe({
      next: (movieDetail) =>
      {
        this.movieId = Number(movieDetail.get('id')); 
        console.log(this.movieId)
      },

      error:(err) =>{
        console.log(err);
      },
    })
    
    this.movie = this._MovieService.getMovieById(this.movieId);

  }

}
