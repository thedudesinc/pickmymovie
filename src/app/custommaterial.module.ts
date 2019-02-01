import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
	declarations: [],
	imports: [
		MatCardModule,
		MatButtonModule,
		MatTableModule,
		MatDividerModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule
	],
	exports: [
		MatCardModule,
		MatButtonModule,
		MatTableModule,
		MatDividerModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule
	]
})
export class CustomMaterialModule { }
