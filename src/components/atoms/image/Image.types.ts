export type ImageProps = {
  /** Define se haverá animaçção de carregamento da Image. */
  animation?: boolean;
  /** Define o alt da Image (referente a acessibilidade). */
  alt?: string;
  /** Define a altura da Image. */
  height?: number;
  /** Define uma função de retorno quando ocorre um erro ao carregar a Image. */
  onLoad?: () => void;
  /** Define a função de retorno quando a Image for carregada. */
  onError?: () => void;
  /** Define o conteúdo da Image. */
  src: string;
  /** Define a largura da Image. */
  width?: number;
};
