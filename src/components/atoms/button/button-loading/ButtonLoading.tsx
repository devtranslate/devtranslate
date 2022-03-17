import styled from 'styled-components';
import { ButtonLoadingUIStyles } from './ButtonLoading.styles';
import { ButtonLoadingProps } from './ButtonLoading.types';
import { Icon } from '../../icon/Icon';

export const ButtonLoading: React.FC<ButtonLoadingProps> = ({ loading, size }) => {
  if (loading) {
    return <ButtonLoadingUI aria-hidden="true" name="spinner" size={size} />;
  }

  return null;
};

const ButtonLoadingUI = styled(Icon)`
  ${ButtonLoadingUIStyles};
`;
