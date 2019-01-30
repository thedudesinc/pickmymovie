import { Component, OnInit } from '@angular/core';

import { Movie } from '../core/models/movie';
import { MoviesService } from '../core/services/movies.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	movieList: Movie[] = [];
	columnsToDisplay: string[] = ['title', 'releaseDate', 'genre', 'advocate'];

	constructor(private moviesService: MoviesService) { }

	ngOnInit() {
		this.moviesService.getMovies().subscribe(json => {this.movieList = json});
	}

	onClickMeButtonClicked(): void {
		alert("Uh oh! I've been clicked!");
	}

}
