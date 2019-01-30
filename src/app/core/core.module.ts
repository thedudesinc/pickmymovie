import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { CustomMaterialModule } from '../custommaterial.module';

@NgModule({
	declarations: [HeaderComponent],
	imports: [
		CommonModule,
		CustomMaterialModule
	],
	exports: [
		HeaderComponent
	]
})
export class CoreModule { }
