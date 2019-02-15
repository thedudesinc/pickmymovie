import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Movie } from '../../models/movie';
import { Genre } from '../../models/genre';

@Component({
	selector: 'app-add-movie-dialog',
	templateUrl: './add-movie-dialog.component.html',
	styleUrls: ['./add-movie-dialog.component.scss']
})
export class AddMovieDialogComponent implements OnInit {

	currentDate: Date = new Date(Date.now());
	Genre = Genre;

	constructor(
		public dialogRef: MatDialogRef<AddMovieDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Movie
	) {	}

	ngOnInit() {
	}

	onCancel(): void {
		this.dialogRef.close();
	}

}
