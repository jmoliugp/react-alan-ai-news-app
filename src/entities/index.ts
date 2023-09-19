export interface NewsArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
}

interface Source {
  id: string;
  name: string;
}
