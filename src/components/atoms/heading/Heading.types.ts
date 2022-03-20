import { ScreenMap } from '../../../theme/tokens/screens/Screens.types';
import { SpacingSizes } from '../../../theme/tokens/spacing/Spacing.types';
import { TypographyHeadingSizes } from '../../../theme/tokens/typography/Typography.types';

export type HeadingProps = {
  /** Define o conteúdo do Heading. */
  children?: React.ReactNode;
  /** Define a cor do Heading. */
  color?: 'primary' | 'secondary' | 'tertiary';
  /** Define o limite de linhas para truncar o texto do Heading. */
  lineClamp?: number;
  /** Define o espaçamento interno total do Heading. */
  padding?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno inferior do Heading. */
  paddingBottom?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno direito do Heading. */
  paddingRight?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno esquerdo do Heading. */
  paddingLeft?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno superior do Heading. */
  paddingTop?: ScreenMap<SpacingSizes>;
  /** Define o tamanho do Heading. */
  size?: ScreenMap<TypographyHeadingSizes>;
  /** Define a tag do Heading. */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  /** Define o alinhamento do Heading. */
  textAlign?: ScreenMap<React.CSSProperties['textAlign']>;
  /** Define o capitalização do Heading. */
  textTransform?: ScreenMap<React.CSSProperties['textTransform']>;
  /** Define o estilo do Heading. */
  variant?: 'default' | 'display';
};
