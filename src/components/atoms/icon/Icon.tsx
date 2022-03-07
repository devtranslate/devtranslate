import styled from 'styled-components';
import { IconStyles } from './Icon.styles';
import { IconProps } from './Icon.types';
import { iconography } from '../../../theme/iconography/Iconography';

export const Icon: React.FC<IconProps> = ({ name, title, width = 24, height = 24, description, ...props }) => {
  if (name) {
    return (
      <IconUI viewBox="0 0 24 24" width={width} height={height} {...props}>
        {title && <title id="svg-title">{title}</title>}
        {description && <desc id="svg-desc">{description}</desc>}
        <path d={iconography[name]} />
      </IconUI>
    );
  }

  return null;
};

const IconUI = styled.svg`
  ${IconStyles};
`;
