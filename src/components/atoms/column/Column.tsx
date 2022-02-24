import styled from 'styled-components';
import { ColumnStyles } from './Column.styles';
import { ColumnProps } from './Column.types';

export const Column: React.FC<ColumnProps> = ({ children, ...props }) => {
  return <ColumnUI {...props}>{children}</ColumnUI>;
};

const ColumnUI = styled.div`
  ${ColumnStyles};
`;
