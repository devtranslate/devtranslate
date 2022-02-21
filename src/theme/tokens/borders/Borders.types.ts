type BorderSizes = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'full';

export type BorderMap<T> = { [shade in BorderSizes]: T };

export type Borders = {
  radius: BorderMap<string>;
};
