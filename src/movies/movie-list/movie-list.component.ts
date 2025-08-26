import { Component, OnInit } from '@angular/core';
import { NgForOf } from "@angular/common";
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/interfaces/movie';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryFilterPipe } from '../../pipes/category-filter.pipe';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { AuthenticationRoutingModule } from "../../authentication/authentication-routing.module";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgForOf, CommonModule, FormsModule, CategoryFilterPipe, TruncatePipe, AuthenticationRoutingModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {

  constructor(private _MovieService: MovieService) { }

  selectedCategory: string = '';
  categories: string[] = [];
  movies: Movie[] = [];
  currentUser: any = null; // holds the logged-in user

  ngOnInit(): void { 
    this.categories = this._MovieService.getCategories();

    this.movies = this._MovieService.getMovies();

    const userData = localStorage.getItem('currentUser');
    if (userData) {
      this.currentUser = JSON.parse(userData);
      if (!this.currentUser)
      {
        this.currentUser.watchlist = []; // ensure watchlist property exists
      }
    }
  }


  addToWatchlist(movie:any)
  {
    this._MovieService.addToWatchlist(movie);
  }

  isInWatchlist(movie: any):boolean
  {
    return this._MovieService.isInWatchlist(movie);
  }
}
