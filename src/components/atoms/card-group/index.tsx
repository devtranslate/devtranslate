import styled, { css } from 'styled-components';

const CardGroup: React.FC = ({ children }) => {
  return <CardGroupContainer>{children}</CardGroupContainer>;
};

const CardGroupContainer = styled.div`
  ${({ theme }) =>
    css`
      &:first-child {
        padding-right: ${theme.spacing.sm};
        border-right: 1px solid ${theme.colors.grey.light};
        margin-right: ${theme.spacing.sm};
      }
    `}
`;

export default CardGroup;
