export type ButtonProps = {
  /** Define o conteúdo do Button. */
  children: React.ReactNode;
  /** Define a cor do Button. */
  color: 'primary' | 'secondary' | 'tertiary';
  /** Define se o Button está desabilitado. */
  disabled?: boolean;
  /** Define um href para o Button. */
  href?: string;
  /** Define o onClick do Button. */
  onClick?: () => void;
  /** Define o tamanho do Button. */
  size?: 's' | 'm' | 'l';
  /** Define se o conteúdo será aberto em uma nova aba, janela, etc. (Utilizar junto ao atributo href) */
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
  /** Define o title do Button (referente a acessibilidade). */
  title?: string;
  /** Define o tipo do Button. */
  type: 'button' | 'submit' | 'reset';
  /** Define o estilo do Button. */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
};
