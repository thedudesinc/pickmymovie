import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';

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
		MatIconModule
	],
	exports: [
		MatCardModule,
		MatButtonModule,
		MatTableModule,
		MatDividerModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule
	]
})
export class CustomMaterialModule { }
