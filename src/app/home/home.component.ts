import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable, MatSnackBar } from '@angular/material';

import { Movie } from '../core/models/movie';
import { MoviesService } from '../core/services/movies.service';
import { AddMovieDialogComponent } from '../core/components/add-movie-dialog/add-movie-dialog.component';
import { MovieChosenDialogComponent } from '../core/components/movie-chosen-dialog/movie-chosen-dialog.component';
import { Genre } from '../core/models/genre';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	@ViewChild(MatTable) table: MatTable<any>;
	movieList: Movie[] = [];
	columnsToDisplay: string[] = ['title', 'releaseDate', 'genre', 'advocate', 'actions'];
	Genre = Genre;

	constructor(
		private moviesService: MoviesService,
		public dialog: MatDialog,
		public snackBar: MatSnackBar
	) { }

	ngOnInit() {
		//on page load, add default movies
		this.moviesService.getMovies().subscribe(json => {
			this.movieList = json;
		});
	}

	onAddMovieBtnClicked(): void {	
		//open dialog box
		const addMovieDialogRef = this.dialog.open(AddMovieDialogComponent, {
			data: new Movie(this.movieList.length + 1, "", 2000, 1, "")
		});

		//subscribe to event that is triggered when dialog is closed
		addMovieDialogRef.afterClosed().subscribe(result => {
			if(result) {
				if (result.title !== "" && result.year !== "" && result.advocate !== "") {
					this.moviesService.addMovie(result).subscribe(response => {
						this.moviesService.getMovies().subscribe(movies => {
							this.movieList = movies;
						})
						this.table.renderRows();
					});
				}
			}
		});
	}

	onRemoveMovieBtnClicked(movieId: number): void {
		//remove movie from data source
		this.moviesService.removeMovie(movieId).subscribe(response => {
			//refresh table to show change
			this.moviesService.getMovies().subscribe(movies => {
				this.movieList = movies;
			})
			this.table.renderRows();
		});
	}

	randomlySelectMovie(): void {
		if(this.movieList.length > 0) {
			//get movie randomly
			let selectedMovie = this.movieList[Math.floor(Math.random() * this.movieList.length)];

			//open dialog with result
			const movieChosenDialogRef = this.dialog.open(MovieChosenDialogComponent, {
				data: selectedMovie
			});
		} else {
			this.snackBar.open("No movies available!", "Dismiss", {
				duration: 3000
			});
		}		
	}

}
