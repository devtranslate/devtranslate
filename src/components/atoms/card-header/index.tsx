import styled, { css } from 'styled-components';

const CardHeader: React.FC = ({ children }) => {
  return <CardHeaderContainer>{children}</CardHeaderContainer>;
};

const CardHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;

  ${({ theme }) =>
    css`
      padding-bottom: ${theme.spacing.xs};
    `}
`;

export default CardHeader;
