type ColorShades = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type ColorMap<T> = { [shade in ColorShades]: T };

export type Colors = {
  black: string;
  white: string;
  red: ColorMap<string>;
  green: ColorMap<string>;
  blue: ColorMap<string>;
  orange: ColorMap<string>;
  yellow: ColorMap<string>;
  cyan: ColorMap<string>;
  purple: ColorMap<string>;
  blueGray: ColorMap<string>;
  gray: ColorMap<string>;
};
