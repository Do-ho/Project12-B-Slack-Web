import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  backgroundColor: string;
  borderColor: string;
  fontColor: string;
}

const StyledButton = styled.button<any>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.borderColor};
  color: ${(props) => props.fontColor};
  padding: 0.3rem 1rem;
  border-radius: 0.4rem;
  outline: none;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ children, backgroundColor, borderColor, fontColor, ...props }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} borderColor={borderColor} fontColor={fontColor} {...props}>
      {children}
    </StyledButton>
  );
};

export { Button, ButtonProps };
