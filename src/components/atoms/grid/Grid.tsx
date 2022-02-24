import styled from 'styled-components';
import { GridStyles } from './Grid.styles';
import { GridProps } from './Grid.types';

export const Grid: React.FC<GridProps> = ({ children, container = false, tag = 'div', ...props }) => {
  return (
    <GridUI as={tag} container={container} {...props}>
      {children}
    </GridUI>
  );
};

const GridUI = styled.div`
  ${GridStyles};
`;
