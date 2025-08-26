import { Injectable } from '@angular/core';
import { Movie } from "../models/interfaces/movie";
import { Category } from '../models/enums/category';
import { Rating } from '../models/enums/rating';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  private storageKey = 'watchlist';

  private movies: Movie[] = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      posterUrl: "assets/images/The Shawshank Redemption.jpg",
      category: Category.Drama,
      rating: Rating.G,
      description: "Two imprisoned men bond over years, finding solace and eventual redemption through acts of common decency.",
      releaseYear: 1994,
      director: "Frank Darabont"
    },
    {
      id: 2,
      title: "The Godfather",
      posterUrl: "assets/images/The Godfather.jpeg",
      category: Category.Horror,
      rating: Rating.NC17,
      description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
      releaseYear: 1972,
      director: "Francis Ford Coppola"
    },
    {
      id: 3,
      title: "Inception",
      posterUrl: "assets/images/Inception.jpg",
      category: Category.Action,
      rating: Rating.PG13,
      description: "A skilled thief uses dream-sharing technology to steal corporate secrets and plant an idea into a target’s mind.",
      releaseYear: 2010,
      director: "Christopher Nolan"
    },
    {
      id: 4,
      title: "The Dark Knight",
      posterUrl: "assets/images/The Dark Knight.jpg",
      category: Category.Action,
      rating: Rating.PG13,
      description: "Batman sets out to dismantle organized crime in Gotham with the help of allies, but faces a new menace—the Joker.",
      releaseYear: 2008,
      director: "Christopher Nolan"
    },
    {
      id: 5,
      title: "Forrest Gump",
      posterUrl: "assets/images/Forrest Gump.jpg",
      category: Category.Drama,
      rating: Rating.PG,
      description: "The story of a slow-witted but kind-hearted man witnessing and unwittingly influencing key historical events.",
      releaseYear: 1994,
      director: "Robert Zemeckis"
    },
    {
      id: 6,
      title: "The Matrix",
      posterUrl: "assets/images/The_Matrix_Poster.jpg",
      category: Category.Action,
      rating: Rating.PG,
      description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
      releaseYear: 1999,
      director: "The Wachowskis"
    },
    {
      id: 7,
      title: "Interstellar",
      posterUrl: "assets/images/Interstellar.jpg",
      category: Category.Drama,
      rating: Rating.G,
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.",
      releaseYear: 2014,
      director: "Christopher Nolan"
    },
    {
      id: 8,
      title: "Pulp Fiction",
      posterUrl: "assets/images/Pulp Fiction.jpeg",
      category: Category.Drama,
      rating: Rating.NC17,
      description: "The lives of two mob hitmen, a boxer, a gangster's wife, and others intertwine in tales of violence and redemption.",
      releaseYear: 1994,
      director: "Quentin Tarantino"
    },
    {
      id: 9,
      title: "Fight Club",
      posterUrl: "assets/images/Fight Club.jpeg",
      category: Category.Drama,
      rating: Rating.PG,
      description: "An insomniac and a soap maker form an underground fight club, evolving into something much darker.",
      releaseYear: 1999,
      director: "David Fincher"
    },
    {
      id: 10,
      title: "Avengers: Endgame",
      posterUrl: "assets/images/Avengers Endgame.jpg",
      category: Category.Action,
      rating: Rating.PG13,
      description: "The Avengers assemble once more to reverse the damage caused by Thanos and restore balance to the universe.",
      releaseYear: 2019,
      director: "Anthony and Joe Russo"
    },
    

  ];

  private moviesLength: number = this.movies.length;

  getMovies(): Movie[] {
    return this.movies;
  }

  getCategories(): string[]
  {
    return Array.from(new Set(this.movies.map(movie => movie.category)));
  }

  /** Get the current user's watchlist (array of movie titles) */
  getWatchlist(): string[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  /** Add only the movie title to the watchlist if not already added */
  addToWatchlist(movie: Movie): void {
    const list = this.getWatchlist();
    if (!list.includes(movie.title)) {
      list.push(movie.title);
      this.saveWatchlist(list);
    }
  }

  /** Check if a movie title is in the watchlist */
  isInWatchlist(movieTitle: string): boolean {
    return this.getWatchlist().includes(movieTitle);
  }

  /** Save the watchlist back to localStorage */
  saveWatchlist(list: string[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }

  getMovieById(id: number): Movie | undefined
  {
  return this.movies.find(movie => movie.id === id);
  }

}