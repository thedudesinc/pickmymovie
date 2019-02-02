import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { CustomMaterialModule } from '../custommaterial.module';
import { AddMovieDialogComponent } from './components/add-movie-dialog/add-movie-dialog.component';
import { MovieChosenDialogComponent } from './components/movie-chosen-dialog/movie-chosen-dialog.component';

@NgModule({
	declarations: [
		HeaderComponent, 
		AddMovieDialogComponent,
		MovieChosenDialogComponent
	],
	imports: [
		CommonModule,
		CustomMaterialModule,
		FormsModule
	],
	exports: [
		HeaderComponent,
		AddMovieDialogComponent,
		MovieChosenDialogComponent
	],
	entryComponents: [
		AddMovieDialogComponent,
		MovieChosenDialogComponent
	]
})
export class CoreModule { }
