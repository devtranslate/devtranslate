import { useState } from 'react';
import styled from 'styled-components';
import { ImageStyles, IconUnavailableStyles } from './Image.styles';
import { ImageProps } from './Image.types';
import { Icon } from '../icon/Icon';

export const Image: React.FC<ImageProps> = ({ src, onError, onLoad, ...props }) => {
  const [status, setStatus] = useState<'failed' | 'loaded'>();

  const handleImageFailed = () => {
    setStatus('failed');

    if (onError) {
      onError();
    }
  };

  const handleImageLoad = () => {
    setStatus('loaded');

    if (onLoad) {
      onLoad();
    }
  };

  if (status === 'failed') {
    return (
      <ImageUI as="div" status={status} onError={handleImageFailed} {...props}>
        <IconUnavailableUI
          name="unavailable"
          title="Imagem indisponível"
          description="Ocorreu um erro no carregamento da imagem"
          width={32}
          height={32}
        />
      </ImageUI>
    );
  }

  return <ImageUI src={src} status={status} onError={handleImageFailed} onLoad={handleImageLoad} {...props} />;
};

const ImageUI = styled.img`
  ${ImageStyles};
`;

const IconUnavailableUI = styled(Icon)`
  ${IconUnavailableStyles};
`;
