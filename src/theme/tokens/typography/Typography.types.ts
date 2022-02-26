export type TypographyBodySizes = 's' | 'm' | 'l';

export type TypographyBodyMap<T> = { [size in TypographyBodySizes]: T };

export type TypographyHeadingSizes = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';

export type TypographyHeadingMap<T> = { [size in TypographyHeadingSizes]: T };

export type Typography = {
  fontFamily: {
    sans: string;
    mono: string;
  };
  fontWeights: {
    heading: {
      default: string;
      display: string;
    };
  };
  fontSizes: {
    heading: {
      default: TypographyHeadingMap<string>;
      display: TypographyHeadingMap<string>;
    };
    body: TypographyBodyMap<string>;
  };
  lineHeights: {
    heading: {
      default: TypographyHeadingMap<string>;
      display: TypographyHeadingMap<string>;
    };
    body: TypographyBodyMap<string>;
  };
};
