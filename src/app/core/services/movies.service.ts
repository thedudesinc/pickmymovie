import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.prod';

@Injectable({
	providedIn: 'root'
})
export class MoviesService {

	private moviesUrl: string = environment.moviesServiceUrl;

	constructor(private http: HttpClient) { }

	public getMovies(): Observable<any> {
		return this.http.get("../../../assets/json/movies.json");
	}
}
