export interface BookRaw {
  id: string;
  title: string;
  authors: string[];
  published: string;
  subtitle: string;
  rating: number;
  thumbnails: {
    url: string;
    title: string;
  }[];
  description: string;
}
