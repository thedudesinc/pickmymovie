import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatCardModule,
	MatTableModule,
	MatDividerModule,
	MatDialogModule,
	MatFormFieldModule,
	MatInputModule,
	MatIconModule,
	MatSnackBarModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatSelectModule
} from '@angular/material';

@NgModule({
	declarations: [],
	imports: [
		MatCardModule,
		MatButtonModule,
		MatTableModule,
		MatDividerModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatSnackBarModule,
		MatNativeDateModule,
		MatDatepickerModule,
		MatSelectModule
	],
	exports: [
		MatCardModule,
		MatButtonModule,
		MatTableModule,
		MatDividerModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatSnackBarModule,
		MatNativeDateModule,
		MatDatepickerModule,
		MatSelectModule
	]
})
export class CustomMaterialModule { }
