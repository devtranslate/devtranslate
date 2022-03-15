import { ButtonProps } from '../Button.types';

export type ButtonWrapperProps = {
  children?: ButtonProps['children'];
  size?: ButtonProps['size'];
  icon?: ButtonProps['icon'];
  loading?: ButtonProps['loading'];
  reverse?: ButtonProps['reverse'];
};
