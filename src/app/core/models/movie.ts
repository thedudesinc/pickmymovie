import { Genre } from './genre';

export class Movie {
	constructor(
		public id: number,
		public title: string,
		public releaseDate: number,
		public genre: Genre,
		public advocateId: string
	) {}
}