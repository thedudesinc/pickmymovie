import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieDialogComponent } from './add-movie-dialog.component';

describe('AddMovieDialogComponent', () => {
	let component: AddMovieDialogComponent;
	let fixture: ComponentFixture<AddMovieDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AddMovieDialogComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AddMovieDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
