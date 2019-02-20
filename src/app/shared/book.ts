import { Thumbnail } from './thumbnail';
export { Thumbnail } from './thumbnail';

export class Book {
  constructor(
    public id: string,
    public title: string,
    public authors: string[],
    public published: Date,
    public subtitle?: string,
    public rating?: number,
    public thumbnails?: Thumbnail[],
    public description?: string,
    public clicks?: number
  ) { }
}
