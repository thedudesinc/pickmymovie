import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatTableModule, MatDividerModule } from '@angular/material';

@NgModule({
	declarations: [],
	imports: [
		MatCardModule,
		MatButtonModule,
		MatTableModule,
		MatDividerModule
	],
	exports: [
		MatCardModule,
		MatButtonModule,
		MatTableModule,
		MatDividerModule
	]
})
export class CustomMaterialModule { }
