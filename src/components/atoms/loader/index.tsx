import styled, { css } from 'styled-components';

type LoaderProps = {
  width: number;
};

const Loader: React.FC<LoaderProps> = ({ width }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={width} preserveAspectRatio="xMidYMid">
      <rect fill="#fc5156" x="15" y="15" width="30" height="30" rx="3" ry="3">
        <animate
          attributeName="x"
          dur="2s"
          repeatCount="indefinite"
          keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1"
          values="15;55;55;55;55;15;15;15;15"
          begin="-1.8333333333333333s"
        />
        <animate
          attributeName="y"
          dur="2s"
          repeatCount="indefinite"
          keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1"
          values="15;55;55;55;55;15;15;15;15"
          begin="-1.3333333333333333s"
        />
      </rect>
      <rect fill="#fdb728" x="15" y="15" width="30" height="30" rx="3" ry="3">
        <animate
          attributeName="x"
          dur="2s"
          repeatCount="indefinite"
          keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1"
          values="15;55;55;55;55;15;15;15;15"
          begin="-1.1666666666666667s"
        />
        <animate
          attributeName="y"
          dur="2s"
          repeatCount="indefinite"
          keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1"
          values="15;55;55;55;55;15;15;15;15"
          begin="-0.6666666666666666s"
        />
      </rect>
      <rect fill="#2d383e" x="15" y="15" width="30" height="30" rx="3" ry="3">
        <animate
          attributeName="x"
          dur="2s"
          repeatCount="indefinite"
          keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1"
          values="15;55;55;55;55;15;15;15;15"
          begin="-0.5s"
        />
        <animate
          attributeName="y"
          dur="2s"
          repeatCount="indefinite"
          keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1"
          values="15;55;55;55;55;15;15;15;15"
          begin="0s"
        />
      </rect>
    </Svg>
  );
};

const Svg = styled.svg`
  ${({ width }) =>
    css`
      width: ${width}px;
    `}
`;

export default Loader;
