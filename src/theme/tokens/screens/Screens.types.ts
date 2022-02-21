type ScreenSizes = 'xs' | 's' | 'm' | 'l' | 'xl';

export type ScreenMap<T> = { [size in ScreenSizes]?: T };

type ScreenRange = { min: string; max: string };

export type Screens = {
  xs: ScreenRange;
  s: ScreenRange;
  m: ScreenRange;
  l: ScreenRange;
  xl: Omit<ScreenRange, 'max'>;
};
