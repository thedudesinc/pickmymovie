import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSnackBarModule } from '@angular/material';

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
		MatSnackBarModule
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
		MatSnackBarModule
	]
})
export class CustomMaterialModule { }
