import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  shadow?: string;
  textColor?: string;
};
/**
 *
 * @param param0
 */
const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  color,
  shadow,
  textColor,
  ...rest
}) => (
  <Container type="button" color={`${color}`} shadow={`${shadow}`} textColor={`${textColor}`} {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;