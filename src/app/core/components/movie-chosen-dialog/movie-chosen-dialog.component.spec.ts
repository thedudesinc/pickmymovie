import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MovieChosenDialogComponent } from './movie-chosen-dialog.component';
import { CustomMaterialModule } from 'src/app/custommaterial.module';

describe('AddMovieDialogComponent', () => {
	let component: MovieChosenDialogComponent;
	let fixture: ComponentFixture<MovieChosenDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MovieChosenDialogComponent
			],
			imports: [
				CustomMaterialModule,
				FormsModule,
				BrowserAnimationsModule
			],
			providers: [
				{ provide: MatDialogRef, useValue: {} },
				{ provide: MAT_DIALOG_DATA, useValue: [] },
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MovieChosenDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
