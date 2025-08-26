import { Injectable } from '@angular/core';
import { Movie } from '../models/interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private storageKey = 'watchlist';

  constructor() { }

  /** Get the current watchlist from localStorage */
  getWatchlist(): Movie[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }
  /** Remove a movie from the watchlist */
  removeFromWatchlist(movieId: number): void {
    const list = this.getWatchlist().filter(m => m.id !== movieId);
    this.saveWatchlist(list);
  }
  /** Save the watchlist back to localStorage */
  private saveWatchlist(list: Movie[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }
}
