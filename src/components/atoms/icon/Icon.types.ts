import { IconographyNames } from '../../../theme/iconography/Iconography.types';

export type IconProps = {
  /** Define a cor do Icon. */
  color?: 'primary' | 'secondary' | 'tertiary';
  /** Define o description do Icon (referente a acessibilidade). */
  description?: string;
  /** Define a altura do Icon. */
  height?: number;
  /** Define qual será o ícone renderizado. */
  name: IconographyNames;
  /** Define o grau de rotação do Icon. */
  rotate?: number;
  /** Define o title do Icon (referente a acessibilidade). */
  title?: string;
  /** Define a largura do Icon. */
  width?: number;
};
