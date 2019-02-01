import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { CustomMaterialModule } from '../custommaterial.module';
import { AddMovieDialogComponent } from './components/add-movie-dialog/add-movie-dialog.component';

@NgModule({
	declarations: [
		HeaderComponent, 
		AddMovieDialogComponent
	],
	imports: [
		CommonModule,
		CustomMaterialModule,
		FormsModule
	],
	exports: [
		HeaderComponent,
		AddMovieDialogComponent
	],
	entryComponents: [
		AddMovieDialogComponent
	]
})
export class CoreModule { }
