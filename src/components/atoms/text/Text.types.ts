import { ScreenMap } from '../../../theme/tokens/screens/Screens.types';
import { SpacingSizes } from '../../../theme/tokens/spacing/Spacing.types';
import { TypographyBodySizes } from '../../../theme/tokens/typography/Typography.types';

export type TextProps = {
  /** Define o conteúdo do Text. */
  children: React.ReactNode;
  /** Define a cor do Text. */
  color?: 'primary' | 'secondary' | 'tertiary';
  /** Define o limite de linhas para o texto do Text truncar. */
  lineClamp?: number;
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
  /** Define a tag do Text. */
  tag: 'b' | 'i' | 'p' | 's' | 'small' | 'span' | 'strong' | 'u';
  /** Define o alinhamento do Text. */
  textAlign?: ScreenMap<React.CSSProperties['textAlign']>;
  /** Define o capitalização do Text. */
  textTransform?: ScreenMap<React.CSSProperties['textTransform']>;
};
