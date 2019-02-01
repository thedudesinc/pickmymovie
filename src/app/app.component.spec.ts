import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { CustomMaterialModule } from './custommaterial.module';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				HeaderComponent
			],
			imports: [
				RouterTestingModule,
				CustomMaterialModule
			]
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'pickmymovie'`, () => {
		// const fixture = TestBed.createComponent(AppComponent);
		// const app = fixture.debugElement.componentInstance;
		// expect(app.title).toEqual('pickmymovie');
	});

	it('should render title in a h1 tag', () => {
		// const fixture = TestBed.createComponent(AppComponent);
		// fixture.detectChanges();
		// const compiled = fixture.debugElement.nativeElement;
		// expect(compiled.querySelector('h1').textContent).toContain('Welcome to pickmymovie!');
	});
});
