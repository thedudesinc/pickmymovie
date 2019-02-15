import { Genre } from './genre';

export class Movie {
	constructor(
		public id: number = 0,
		public title: string,
		public releaseDate: number,
		public genre: number,
		public advocateId: string
	) {}
}