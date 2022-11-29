import React, { FC } from 'react';
import { ButtonProps, Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const handleSize = (size: 'small' | 'large' | 'medium' | undefined) => {
  switch (size) {
    case 'small':
      return {
        height: 24,
        fontSize: 11,
        padding: '0 15px',
      };
    case 'large':
      return {
        height: 48,
        fontSize: 14,
        padding: '0 36px',
      };
    case 'medium':
    default:
      return {
        height: 36,
        fontSize: 12,
        padding: '0 15px',
      };
  }
};

const StyledButton = styled(MuiButton)<ButtonProps>(({ size }) => ({
  ...handleSize(size),
}));

const Button: FC<ButtonProps> = (props) => {
  const { children, size = 'medium', variant = 'contained', color = 'primary', ...others } = props;

  return (
    <StyledButton size={size} variant={variant} color={color} {...others}>
      {children}
    </StyledButton>
  );
};

export default Button;
