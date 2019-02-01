import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.prod';
import { Movie } from '../models/movie';

@Injectable({
	providedIn: 'root'
})
export class MoviesService {

	private moviesUrl: string = environment.moviesServiceUrl;

	private movies: Movie[] = [
		new Movie("Empire Strikes Back", 1985, "Sci-Fi", "Nate"),
		new Movie("Johnny Trumain", 1990, "Drama", "Nate"),
		new Movie("Captain America", 2007, "Action", "JohnMark"),
		new Movie("Die Hard", 1986, "Action", "Nate"),
		new Movie("Endangered Love", 2001, "Romance", "Hannah"),
		new Movie("The Hobbit: Part 1", 2015, "Fantasy", "Nate"),
		new Movie("Star Trek", 2016, "Sci-Fi", "JohnMark"),
	];

	constructor(private http: HttpClient) { }

	public getMovies(): Observable<any> {
		return Observable.create((observer: any) => {
			observer.next(this.movies);
		});
	}

	public addMovie(movie: Movie): void {
		this.movies.push(movie);
	}
}