import styled, { css } from 'styled-components';

const CardBody = ({ children }) => {
  return <CardBodyContainer>{children}</CardBodyContainer>;
};

const CardBodyContainer = styled.div`
  ${({ theme }) =>
    css`
      padding: ${theme.spacing.xs} ${theme.spacing.xs};
      background: ${theme.colors.white};
      border-radius: ${theme.borderRadius.sm};
      box-shadow: ${theme.elevation.skim};
    `}
`;

export default CardBody;
