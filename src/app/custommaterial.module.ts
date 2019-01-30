import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
	declarations: [],
	imports: [
		MatCardModule,
		MatButtonModule
	],
	exports: [
		MatCardModule,
		MatButtonModule
	]
})
export class CustomMaterialModule { }
