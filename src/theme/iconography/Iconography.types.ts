export type IconographyNames =
  | 'catalog'
  | 'chevron'
  | 'facebook'
  | 'github'
  | 'home'
  | 'instagram'
  | 'linkedin'
  | 'search'
  | 'spinner'
  | 'rss'
  | 'telegram'
  | 'unavailable';

export type IconographyMap<T> = { [path in IconographyNames]: T };

export type Iconography = IconographyMap<string>;
