export type TypographyBodySizes = 'xs' | 's' | 'm' | 'l' | 'xl';

export type TypographyBodyMap<T> = { [size in TypographyBodySizes]: T };

export type TypographyHeadingSizes = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';

export type TypographyHeadingMap<T> = { [size in TypographyHeadingSizes]: T };

export type Typography = {
  fontFamily: {
    sans: string;
    mono: string;
  };
  fontSizes: {
    heading: TypographyHeadingMap<string>;
    body: TypographyBodyMap<string>;
  };
  lineHeights: {
    heading: TypographyHeadingMap<string>;
    body: TypographyBodyMap<string>;
  };
};
