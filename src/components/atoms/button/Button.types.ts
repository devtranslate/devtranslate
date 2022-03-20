import { IconographyNames } from '../../../theme/iconography/Iconography.types';

export type ButtonProps = {
  /** Define o conteúdo do Button. */
  children?: React.ReactNode;
  /** Define a cor do Button. */
  color?: 'primary' | 'secondary' | 'tertiary';
  /** Define se o Button está desabilitado. */
  disabled?: boolean;
  /** Define um href para o Button. */
  href?: string;
  /** Define o ícone que será exibido ao lado do conteúdo do Button. */
  icon?: {
    name: IconographyNames;
    rotate?: number;
  };
  /** Define se o Button está carregando. */
  loading?: boolean;
  /** Define o onClick do Button. */
  onClick?: () => void;
  /** Define o relacionamento entre a página atual e a página da propriedade href (referente a SEO) */
  rel?: string;
  /** Define se o ícone do Button será exibido a esquerda. */
  reverse?: boolean;
  /** Define o tamanho do Button. */
  size?: 's' | 'm' | 'l';
  /** Define se o conteúdo será aberto em uma nova aba, janela, etc. (Utilizar junto ao atributo href) */
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
  /** Define o title do Button (referente a acessibilidade). */
  title?: string;
  /** Define o tipo do Button. */
  type?: 'button' | 'submit' | 'reset';
  /** Define o estilo do Button. */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
};
