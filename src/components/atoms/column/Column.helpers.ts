import { css } from 'styled-components';
import { screens } from '../../../theme/tokens/screens/Screens';
import { ScreenMap } from '../../../theme/tokens/screens/Screens.types';

const calcColumnGap = (cols: number) => {
  const GAP_VALUE = 16;
  const columns = 12 / cols;
  const spaceBetweenColumns = columns - 1;

  if (spaceBetweenColumns < 1) {
    return 0;
  }

  return (GAP_VALUE * spaceBetweenColumns) / columns;
};

const calcColumnSize = (cols: number, columnGap?: boolean) => {
  const width = (cols / 12) * 100;

  if (columnGap && width !== 100) {
    return `calc(${width}% - ${calcColumnGap(cols)}px)`;
  }

  return `${width}%`;
};

export const getColumnSize = (props: ScreenMap<number> & { columnGap?: boolean }) => {
  const { xs, s, m, l, xl, columnGap } = props;

  return css`
    ${xs &&
    css`
      width: ${calcColumnSize(xs, columnGap)};
      max-width: ${calcColumnSize(xs, columnGap)};
      flex-basis: ${calcColumnSize(xs, columnGap)};
    `}

    ${s &&
    css`
      @media (min-width: ${screens.s.min}) {
        width: ${calcColumnSize(s, columnGap)};
        max-width: ${calcColumnSize(s, columnGap)};
        flex-basis: ${calcColumnSize(s, columnGap)};
      }
    `}

    ${m &&
    css`
      @media (min-width: ${screens.m.min}) {
        width: ${calcColumnSize(m, columnGap)};
        max-width: ${calcColumnSize(m, columnGap)};
        flex-basis: ${calcColumnSize(m, columnGap)};
      }
    `}

    ${l &&
    css`
      @media (min-width: ${screens.l.min}) {
        width: ${calcColumnSize(l, columnGap)};
        max-width: ${calcColumnSize(l, columnGap)};
        flex-basis: ${calcColumnSize(l, columnGap)};
      }
    `}

    ${xl &&
    css`
      @media (min-width: ${screens.xl.min}) {
        width: ${calcColumnSize(xl, columnGap)};
        max-width: ${calcColumnSize(xl, columnGap)};
        flex-basis: ${calcColumnSize(xl, columnGap)};
      }
    `}
  `;
};
