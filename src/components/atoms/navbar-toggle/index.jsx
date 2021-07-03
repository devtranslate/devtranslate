import styled, { css } from 'styled-components';

const NavbarToggle = ({ active, onClick }) => {
  return (
    <NavbarToggleContainer active={active} onClick={onClick} type="button">
      {Array.from(Array(3)).map((_, index) => (
        <NavbarToggleBar active={active} index={index} key={`menu-${index}`} />
      ))}
    </NavbarToggleContainer>
  );
};

const NavbarToggleContainer = styled.button`
  width: 60px;
  height: 60px;
  cursor: pointer;
  position: relative;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    padding: ${theme.spacing.sm};

    @media (min-width: ${theme.breakpoints.desktop}) {
      display: none;
    }
  `}
`;

const NavbarToggleBar = styled.span`
  width: 20px;
  height: 2px;
  position: absolute;
  transition: 0.5s;
  opacity: 1;

  ${({ theme }) => css`
    background: ${theme.colors.tertiary.darkest};
    border-radius: ${theme.borderRadius.sm};
  `}

  ${({ index, active }) => css`
    &:nth-child(${index + 1}) {
      top: ${23 + 6 * index}px;
    }

    ${active &&
    css`
      &:nth-child(odd) {
        top: 50%;
        transform: translateY(-50%) rotate(${index === 2 && `-`}45deg);
      }

      &:nth-child(even) {
        opacity: 0;
      }
    `}
  `}
`;

export default NavbarToggle;
