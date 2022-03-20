import { ScreenMap } from '../../../theme/tokens/screens/Screens.types';
import { SpacingSizes } from '../../../theme/tokens/spacing/Spacing.types';

export type ViewProps = {
  /** Define o conteúdo da View. */
  children?: React.ReactNode;
  /** Define se a View será inline. */
  inline?: ScreenMap<boolean>;
  /** Define o espaçamento interno total da View. */
  padding?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno inferior da View. */
  paddingBottom?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno direito da View. */
  paddingRight?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno esquerdo da View. */
  paddingLeft?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno superior da View. */
  paddingTop?: ScreenMap<SpacingSizes>;
  /** Define a tag da View. */
  tag?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav';
};
