import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Movie } from '../../models/movie';

@Component({
	selector: 'app-movie-chosen-dialog',
	templateUrl: './movie-chosen-dialog.component.html',
	styleUrls: ['./movie-chosen-dialog.component.scss']
})
export class MovieChosenDialogComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<MovieChosenDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Movie
	) { }

	ngOnInit() {
	}
}
