type Language = 'portuguese' | 'english';

type Status = 'completed' | 'inProgress';

type Type = 'articles' | 'books' | 'documentation' | 'others';

type Translation = {
  id: number;
  author: string;
  imageUrl: string;
  language: Language;
  status: Status;
  title: string;
  translator: string;
  type: Type;
  url: string;
};

type Pagination = {
  page: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
};

export type CatalogDataProps = {
  translations: Translation[];
  pagination: Pagination;
};
