import { css } from 'styled-components';
import { ButtonProps } from './Button.types';
import { Theme } from '../../../theme/Theme.types';

export const getButtonSize = (props: { size?: ButtonProps['size']; theme: Theme }) => {
  const { theme, size } = props;

  switch (size) {
    case 's':
      return css`
        height: ${theme.spacing.m};
        max-height: ${theme.spacing.m};
        padding: 0 ${theme.spacing.s};
        font-size: ${theme.typography.fontSizes.body.s};
      `;
    case 'l':
      return css`
        height: ${theme.spacing.xl};
        max-height: ${theme.spacing.xl};
        padding: 0 ${theme.spacing.l};
        font-size: ${theme.typography.fontSizes.body.l};
      `;
    case 'm':
    default:
      return css`
        height: ${theme.spacing.l};
        max-height: ${theme.spacing.l};
        padding: 0 ${theme.spacing.m};
        font-size: ${theme.typography.fontSizes.body.m};
      `;
  }
};

export const getButtonVariant = (props: {
  variant?: ButtonProps['variant'];
  color?: ButtonProps['color'];
  theme: Theme;
}) => {
  const { theme, color, variant } = props;
  const currentColor = color ?? 'primary';

  switch (variant) {
    case 'secondary':
      return css`
        color: ${theme.brand.colors.default};
        background-color: transparent;
        border: 1px solid ${theme.brand.colors[currentColor].medium};
        border-radius: ${theme.spacing.xs};
        box-shadow: ${theme.elevations.s};

        svg {
          fill: ${theme.brand.colors.default};
        }
      `;
    case 'tertiary':
      return css`
        color: ${theme.brand.colors.default};
        background-color: ${theme.colors.white};
        border-radius: ${theme.spacing.m};
        box-shadow: ${theme.elevations.s};

        svg {
          fill: ${theme.brand.colors.default};
        }
      `;
    case 'ghost':
      return css`
        color: ${theme.brand.colors[currentColor].medium};
        background-color: transparent;
        border-radius: ${theme.spacing.m};

        svg {
          fill: ${theme.brand.colors[currentColor].medium};
        }
      `;
    case 'primary':
    default:
      return css`
        color: ${theme.colors.white};
        background-color: ${theme.brand.colors[currentColor].medium};
        border-radius: ${theme.spacing.xs};
        box-shadow: ${theme.elevations.s};

        svg {
          fill: ${theme.colors.white};
        }
      `;
  }
};

export const getButtonHover = (props: {
  variant?: ButtonProps['variant'];
  color?: ButtonProps['color'];
  theme: Theme;
}) => {
  const { theme, color, variant } = props;
  const currentColor = color ?? 'primary';

  switch (variant) {
    case 'secondary':
      return css`
        color: ${theme.colors.gray[600]};
        border: 1px solid ${theme.brand.colors[currentColor].light};

        svg {
          fill: ${theme.colors.gray[600]};
        }
      `;
    case 'tertiary':
      return css`
        color: ${theme.brand.colors[currentColor].medium};

        svg {
          fill: ${theme.brand.colors[currentColor].medium};
        }
      `;
    case 'ghost':
      return css`
        background-color: ${theme.brand.colors[currentColor].lighter};
      `;
    case 'primary':
    default:
      return css`
        background-color: ${theme.brand.colors[currentColor].light};
      `;
  }
};

export const getButtonActive = (props: {
  variant?: ButtonProps['variant'];
  color?: ButtonProps['color'];
  theme: Theme;
}) => {
  const { theme, color, variant } = props;
  const currentColor = color ?? 'primary';

  switch (variant) {
    case 'secondary':
      return css`
        color: ${theme.colors.gray[800]};
        border: 1px solid ${theme.brand.colors[currentColor].dark};
        box-shadow: ${theme.elevations.xs};

        svg {
          fill: ${theme.colors.gray[800]};
        }
      `;
    case 'tertiary':
      return css`
        color: ${theme.brand.colors[currentColor].dark};
        box-shadow: ${theme.elevations.xs};

        svg {
          fill: ${theme.brand.colors[currentColor].dark};
        }
      `;
    case 'ghost':
      return css`
        color: ${theme.brand.colors[currentColor].dark};
        background-color: ${theme.brand.colors[currentColor].outline};

        svg {
          fill: ${theme.brand.colors[currentColor].dark};
        }
      `;
    case 'primary':
    default:
      return css`
        background-color: ${theme.brand.colors[currentColor].dark};
        box-shadow: ${theme.elevations.xs};
      `;
  }
};

export const getButtonDisabled = (props: { variant?: ButtonProps['variant']; theme: Theme }) => {
  const { theme, variant } = props;

  switch (variant) {
    case 'secondary':
      return css`
        color: ${theme.colors.gray[500]};
        border: 1px solid ${theme.colors.gray[300]};

        svg {
          fill: ${theme.colors.gray[500]};
        }
      `;
    case 'ghost':
      return css`
        color: ${theme.colors.gray[500]};

        svg {
          fill: ${theme.colors.gray[500]};
        }
      `;
    case 'primary':
    case 'tertiary':
    default:
      return css`
        color: ${theme.colors.gray[500]};
        background-color: ${theme.colors.gray[100]};

        svg {
          fill: ${theme.colors.gray[500]};
        }
      `;
  }
};
