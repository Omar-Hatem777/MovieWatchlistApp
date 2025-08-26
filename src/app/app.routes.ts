import { authGuard } from './../authentication/auth.guard';
import { Routes } from '@angular/router';
import { LoginComponent } from '../authentication/login/login.component';
import { MovieListComponent } from '../movies/movie-list/movie-list.component';
import { MoviesModule } from '../movies/movies.module';
import { AddMovieComponent } from '../movies/add-movie/add-movie.component';
import { MovieDetailComponent } from '../movies/movie-detail/movie-detail.component';
import { LayoutComponent } from '../movies/layout/layout.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    
    {
        path: 'login', component: LoginComponent,title: 'Login'
    },

    {
        path: 'movies', component: LayoutComponent, canActivate: [authGuard], 
        children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: MovieListComponent, title: 'Movies List' },
        { path: 'add', component: AddMovieComponent, title: 'Add Movie' },
        { path: ':id', component: MovieDetailComponent, title: 'Movie Details' },
        { path: '**', redirectTo: 'list' }
        ]
    },

    // Lazy-loaded watchlist module
    {
        path: 'watchlist',
        canActivate: [authGuard],
        loadChildren: () =>
            import('../watchlist/watchlist.module').then(m => m.WatchlistModule)
    },

    // Redirect any unknown path to login
    { path: '**', redirectTo: 'login' }
];
