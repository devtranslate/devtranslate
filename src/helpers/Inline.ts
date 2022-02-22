import { css } from 'styled-components';
import { screens } from '../theme/tokens/screens/Screens';
import { ScreenMap } from '../theme/tokens/screens/Screens.types';

export const getInline = (props: { inline?: ScreenMap<boolean> }) => {
  const { inline } = props;

  return css`
    ${inline &&
    css`
      flex-wrap: nowrap;
      ${typeof inline.xs === 'boolean' &&
      css`
        flex-direction: ${inline.xs ? 'row' : 'column'};
      `}
      ${typeof inline.s === 'boolean' &&
      css`
        @media (min-width: ${screens.s.min}) {
          flex-direction: ${inline.s ? 'row' : 'column'};
        }
      `}
      ${typeof inline.m === 'boolean' &&
      css`
        @media (min-width: ${screens.m.min}) {
          flex-direction: ${inline.m ? 'row' : 'column'};
        }
      `}
      ${typeof inline.l === 'boolean' &&
      css`
        @media (min-width: ${screens.l.min}) {
          flex-direction: ${inline.l ? 'row' : 'column'};
        }
      `}
      ${typeof inline.xl === 'boolean' &&
      css`
        @media (min-width: ${screens.xl.min}) {
          flex-direction: ${inline.xl ? 'row' : 'column'};
        }
      `}
    `}
  `;
};
