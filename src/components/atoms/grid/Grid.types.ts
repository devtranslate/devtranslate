import { ScreenMap } from '../../../theme/tokens/screens/Screens.types';
import { SpacingSizes } from '../../../theme/tokens/spacing/Spacing.types';

export type GridProps = {
  /** Define o conteúdo da Grid. */
  children: React.ReactNode;
  /** Define se a Grid largura máxima de 1280px. */
  container?: boolean;
  /** Define alinhamento de todo o conteúdo dentro da Grid. */
  justifyContent?: ScreenMap<React.CSSProperties['justifyContent']>;
  /** Define o espaçamento interno total da Grid. */
  padding?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno inferior da Grid. */
  paddingBottom?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno direito da Grid. */
  paddingRight?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno esquerdo da Grid. */
  paddingLeft?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno superior da Grid. */
  paddingTop?: ScreenMap<SpacingSizes>;
  /** Define a tag da Grid. */
  tag?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav';
};
