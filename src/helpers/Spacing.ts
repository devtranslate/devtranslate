import { css } from 'styled-components';
import { screens } from '../theme/tokens/screens/Screens';
import { ScreenMap } from '../theme/tokens/screens/Screens.types';
import { spacing } from '../theme/tokens/spacing/Spacing';
import { SpacingSizes, SpacingTypes, SpacingTypesMap } from '../theme/tokens/spacing/Spacing.types';

const getScreenSpacing = (size: SpacingSizes) => {
  return spacing[size];
};

const getAttribute = (attr: string) => {
  return attr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

export const getSpacing = (props: SpacingTypesMap<ScreenMap<SpacingSizes>>, attr: SpacingTypes) => {
  const attribute = getAttribute(attr);
  const spacingType = props[attr];

  return css`
    ${spacingType &&
    css`
      ${spacingType.xs &&
      css`
        ${attribute}: ${getScreenSpacing(spacingType.xs)};
      `}
      ${spacingType.s &&
      css`
        @media (min-width: ${screens.s.min}) {
          ${attribute}: ${getScreenSpacing(spacingType.s)};
        }
      `}
      ${spacingType.m &&
      css`
        @media (min-width: ${screens.m.min}) {
          ${attribute}: ${getScreenSpacing(spacingType.m)};
        }
      `}
      ${spacingType.l &&
      css`
        @media (min-width: ${screens.l.min}) {
          ${attribute}: ${getScreenSpacing(spacingType.l)};
        }
      `}
      ${spacingType.xl &&
      css`
        @media (min-width: ${screens.xl.min}) {
          ${attribute}: ${getScreenSpacing(spacingType.xl)};
        }
      `}
    `}
  `;
};

export const getPadding = (props: SpacingTypesMap<ScreenMap<SpacingSizes>>) => {
  return css`
    ${getSpacing(props, 'padding')};
    ${getSpacing(props, 'paddingBottom')};
    ${getSpacing(props, 'paddingLeft')};
    ${getSpacing(props, 'paddingRight')};
    ${getSpacing(props, 'paddingTop')};
  `;
};

export const getMargin = (props: SpacingTypesMap<ScreenMap<SpacingSizes>>) => {
  return css`
    ${getSpacing(props, 'margin')};
    ${getSpacing(props, 'marginBottom')};
    ${getSpacing(props, 'marginLeft')};
    ${getSpacing(props, 'marginRight')};
    ${getSpacing(props, 'marginTop')};
  `;
};
