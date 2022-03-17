import styled from 'styled-components';
import { ButtonStyles } from './Button.styles';
import { ButtonProps } from './Button.types';
import { ButtonLoading } from './button-loading/ButtonLoading';
import { ButtonWrapper } from './button-wrapper/ButtonWrapper';

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  icon,
  loading,
  type = 'button',
  size,
  onClick,
  reverse,
  ...props
}) => {
  const handleOnClick = () => {
    if (!loading && onClick) {
      onClick();
    }
  };

  const renderButtonContent = () => {
    return (
      <>
        <ButtonWrapper icon={icon} loading={loading} reverse={reverse} size={size}>
          {children}
        </ButtonWrapper>
        <ButtonLoading loading={loading} size={size} />
      </>
    );
  };

  const buttonProps = { loading, size, onClick: handleOnClick };

  if (href) {
    return (
      <ButtonUI as="a" role="button" href={href} {...buttonProps} {...props}>
        {renderButtonContent()}
      </ButtonUI>
    );
  }

  return (
    <ButtonUI type={type} {...buttonProps} {...props}>
      {renderButtonContent()}
    </ButtonUI>
  );
};

const ButtonUI = styled.button`
  ${ButtonStyles};
`;
