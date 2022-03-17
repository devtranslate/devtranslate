import styled from 'styled-components';
import { ButtonIconUIStyles, ButtonSpanUIStyles, ButtonWrapperUIStyles } from './ButtonWrapper.styles';
import { ButtonWrapperProps } from './ButtonWrapper.types';
import { Icon } from '../../icon/Icon';

export const ButtonWrapper: React.FC<ButtonWrapperProps> = ({ children, loading, size, icon, reverse }) => {
  return (
    <ButtonWrapperUI loading={loading} reverse={reverse}>
      {children && <ButtonSpanUI reverse={reverse}>{children}</ButtonSpanUI>}
      {icon && <ButtonIconUI aria-hidden="true" size={size} {...icon} />}
    </ButtonWrapperUI>
  );
};

const ButtonWrapperUI = styled.div`
  ${ButtonWrapperUIStyles};
`;

const ButtonSpanUI = styled.span`
  ${ButtonSpanUIStyles};
`;

const ButtonIconUI = styled(Icon)`
  ${ButtonIconUIStyles};
`;
