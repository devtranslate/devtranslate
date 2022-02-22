import styled from 'styled-components';
import { ViewStyles } from './View.styles';
import { ViewProps } from './View.types';

export const View: React.FC<ViewProps> = ({ children, tag = 'div', ...props }) => {
  return (
    <ViewUI as={tag} {...props}>
      {children}
    </ViewUI>
  );
};

const ViewUI = styled.div`
  ${ViewStyles};
`;
