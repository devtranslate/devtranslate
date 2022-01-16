export type Language = 'portuguese' | 'english';

export type Status = 'completed' | 'inProgress';

export type Type = 'articles' | 'books' | 'documentation' | 'others';

export type Translation = {
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
