import { Component, OnInit } from '@angular/core';

import { Movie } from '../core/models/movie';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	movieList: Movie[] = [];
	columnsToDisplay = ['title', 'releaseDate', 'genre', 'advocate'];

	constructor() { 
		this.movieList = [
			new Movie("Empire Strikes Back", 1985, "Sci-Fi", "Nate"),
			new Movie("Johnny Trumain", 1990, "Drama", "Nate"),
			new Movie("Captain America", 2007, "Action", "JohnMark"),
			new Movie("Die Hard", 1986, "Action", "Nate"),
			new Movie("Endangered Love", 2001, "Romance", "Hannah"),
			new Movie("The Hobbit: Part 1", 2015, "Fantasy", "Nate"),
			new Movie("Star Trek", 2016, "Sci-Fi", "JohnMark"),
		];
	}

	ngOnInit() {
	}

	onClickMeButtonClicked(): void {
		alert("Uh oh! I've been clicked!");
	}

}
