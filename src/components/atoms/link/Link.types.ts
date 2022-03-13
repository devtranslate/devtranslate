import { ScreenMap } from '../../../theme/tokens/screens/Screens.types';
import { SpacingSizes } from '../../../theme/tokens/spacing/Spacing.types';
import { TypographyBodySizes } from '../../../theme/tokens/typography/Typography.types';

export type LinkProps = {
  /** Define o conteúdo do Link. */
  children: React.ReactNode;
  /** Define um href para o Link. */
  href?: string;
  /** Define o onClick do Link. */
  onClick?: () => void;
  /** Define o espaçamento interno total do Text. */
  padding?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno inferior do Text. */
  paddingBottom?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno direito do Text. */
  paddingRight?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno esquerdo do Text. */
  paddingLeft?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno superior do Text. */
  paddingTop?: ScreenMap<SpacingSizes>;
  /** Define o tamanho do Text. */
  size?: ScreenMap<TypographyBodySizes>;
  /** Define se o conteúdo será aberto em uma nova aba, janela, etc. */
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
  /** Define o title do Link (referente a acessibilidade). */
  title?: string;
  /** Define o alinhamento do Text. */
  textAlign?: ScreenMap<React.CSSProperties['textAlign']>;
};
