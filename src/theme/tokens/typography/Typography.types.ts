type TypographySizes = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';

export type TypographyMap<T> = { [size in TypographySizes]: T };

export type Typography = {
  fontFamily: {
    sans: string;
    mono: string;
  };
  heading: {
    fontWeight: string;
    fontSizes: TypographyMap<string>;
    lineHeight: TypographyMap<string>;
  };
  body: {
    fontWeight: string;
    fontSizes: Omit<TypographyMap<string>, 'xxxl'>;
    lineHeight: Omit<TypographyMap<string>, 'xxxl'>;
  };
};
