import styled, { css } from 'styled-components';

const CardBody = ({ children }) => {
  return <CardBodyContainer>{children}</CardBodyContainer>;
};

const CardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 62px;

  ${({ theme }) =>
    css`
      padding: ${theme.spacing.xs} ${theme.spacing.xs};
      background: ${theme.colors.white};
      border-radius: ${theme.borderRadius.sm};
      box-shadow: ${theme.elevation.skim};
    `}
`;

export default CardBody;
