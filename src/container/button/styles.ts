import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  color: string | '#00000';
  shadow?: string;
  textColor?: string;
}

export const Container = styled.button<ContainerProps>`
  ${(props) => props.color && css`background: ${props.color}`};
  height: 56px;
  border-radius: 25px;
  border: 0;
  padding: 0 16px;
  color: #FFFF;
  ${(props) => props.textColor && css`color: ${props.textColor}`};
  width: 100%;
  margin-top: 2px;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  @media(max-height: 800px) {
    font-size: 18px;
  }
  ${(props) => props.shadow && css` box-shadow: 0px 4px 10px ${props.shadow}`};
  outline: 0;
  transition: background-color 0.3s;
  &:hover {
    ${(props) => props.color && css`background: ${shade(0.2, props.color)}`};
  }
`;