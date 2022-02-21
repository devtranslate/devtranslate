export type SpacingSizes = 'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';

export type SpacingMap<T> = { [size in SpacingSizes]: T };

export type Spacing = SpacingMap<string>;
