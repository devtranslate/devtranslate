import { ScreenMap } from '../../../theme/tokens/screens/Screens.types';
import { SpacingSizes } from '../../../theme/tokens/spacing/Spacing.types';
import { Range } from '../../../Global.types';

export type ColumnProps = {
  /** Define o alinhamento dos itens no eixo transversal dentro da Column. */
  alignItems?: ScreenMap<React.CSSProperties['alignItems']>;
  /** Define o conteúdo da Column. */
  children: React.ReactNode;
  /** Define se existe espaçamento entre as Columns. */
  columnGap?: boolean;
  /** Define se a Column não será exibida. */
  invisible?: ScreenMap<boolean>;
  /** Define o alinhamento dos itens no eixo principal dentro da Column. */
  justifyContent?: ScreenMap<React.CSSProperties['justifyContent']>;
  /** Define o espaçamento interno total da Column. */
  padding?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno inferior da Column. */
  paddingBottom?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno direito da Column. */
  paddingRight?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno esquerdo da Column. */
  paddingLeft?: ScreenMap<SpacingSizes>;
  /** Define o espaçamento interno superior da Column. */
  paddingTop?: ScreenMap<SpacingSizes>;
  /** Define o tamanho do conteúdo da Column quando a tela tiver mais que 640px. */
  xs?: Range<1, 13>;
  /** Define o tamanho do conteúdo da Column quando a tela tiver mais que 768px. */
  s?: Range<1, 13>;
  /** Define o tamanho do conteúdo da Column quando a tela tiver mais que 1024px. */
  m?: Range<1, 13>;
  /** Define o tamanho do conteúdo da Column quando a tela tiver mais que 1280px. */
  l?: Range<1, 13>;
  /** Define o tamanho do conteúdo da Column quando a tela tiver mais que 1536px. */
  xl?: Range<1, 13>;
};
