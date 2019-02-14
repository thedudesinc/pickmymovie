import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment.prod';
import { Movie } from '../models/movie';

@Injectable({
	providedIn: 'root'
})
export class MoviesService {

	private moviesUrl: string = environment.moviesServiceUrl;

	constructor(private http: HttpClient) { }

	public getMovies(): Observable<any> {
		return this.http.get(this.moviesUrl + 'movies');
	}

	public getMovie(movieId: number): Observable<any> {
		return this.http.get(this.moviesUrl + `movies/${movieId}`);
	}

	public addMovie(movie: Movie): Observable<any> {
		return this.http.post(this.moviesUrl + 'movies', movie);
	}

	public removeMovie(movieId: number): Observable<any> {
		return this.http.delete(this.moviesUrl + `movies/${movieId}`).pipe(map(data => data));
	}
}