import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';

import { Movie } from '../core/models/movie';
import { MoviesService } from '../core/services/movies.service';
import { AddMovieDialogComponent } from '../core/components/add-movie-dialog/add-movie-dialog.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	@ViewChild(MatTable) table: MatTable<any>;
	movieList: Movie[] = [];
	columnsToDisplay: string[] = ['order', 'title', 'releaseDate', 'genre', 'advocate', 'actions'];

	constructor(
		private moviesService: MoviesService,
		public dialog: MatDialog
	) { }

	ngOnInit() {
		this.moviesService.getMovies().subscribe(json => {
			this.movieList = json;
		});
	}

	onAddMovieBtnClicked(): void {	
		//open dialog box
		const addMovieDialogRef = this.dialog.open(AddMovieDialogComponent, {
			data: new Movie(this.movieList.length + 1, "", 2000, "", "")
		});

		addMovieDialogRef.afterClosed().subscribe(result => {
			if(result) {
				if (result.title !== "" && result.year !== "" && result.advocate !== "") {
					this.moviesService.addMovie(result);
				}
				this.table.renderRows();
			}
		});
	}

	onRemoveMovieBtnClicked(movieId: number): void {
		this.moviesService.removeMovie(movieId);
		this.table.renderRows();
	}

}
