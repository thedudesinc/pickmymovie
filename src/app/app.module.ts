import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { AppRouting } from './app.routing';
import { CustomMaterialModule } from './custommaterial.module';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		CoreModule,
		AppRouting,
		BrowserAnimationsModule,
		CustomMaterialModule,
		HttpClientModule,
		FormsModule,
		CommonModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
