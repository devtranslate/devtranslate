export type SpacingSizes = 'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';

export type SpacingSizesMap<T> = { [size in SpacingSizes]: T };

export type SpacingTypes =
  | 'padding'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingTop'
  | 'margin'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop';

export type SpacingTypesMap<T> = { [type in SpacingTypes]?: T };

export type Spacing = SpacingSizesMap<string>;
