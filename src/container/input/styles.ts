import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  // color: string | '#00000';
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 2px;
  svg {
    margin: 0;
    margin-top:-10px
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

export const GenericContainer = styled.div<ContainerProps>`
color: red;
display: flex;
align-items: center;

input {
  height: 4.5rem;
    width: 25rem;
    outline: 0;
    border: 1px solid #CCC1C1;
    box-sizing: border-box;
    border-radius: 0px 15px 15px 0px;
    padding: 0 20px 0 20px;
    font-family: Amiko;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 75px;
    color: #7C8087;
    @media(max-height: 800px) {
      height: 4rem;
      width: 22rem;
    }
  ${(props) => props.isErrored && css`
      border-color: #c53030;
  `}
  ${(props) => props.isFocused && css`
      border-color: #829A83;
  `}
  ${(props) => props.isFilled && css`
      color: #829A83;
  `}
  & + div {
     margin-top: 8px;
   }
  &::placeholder{
    color: #829A83;
  }
  }
 svg {
  color: #5CE1AD;
  font-size: 40px;
  @media(max-height: 800px) {
    font-size: 30px;
    }
  title{
    color: red;
    background-color: red;
    background: red;
  }
}
`;

export const Container = styled.div<ContainerProps>`
${(props) => props.color && css`background: ${props.color}`};
padding: 1%;
color: #666360;
display: flex;
align-items: center;
margin-left: 3%;
input {
  display: flex;
  align-items: center;
  background: #FFFFFF;
  border: 2px solid #E6F4F0;
  box-sizing: border-box;
  border-radius: 30px;
  margin-left: 2%;
  width: 90%;
  height: 4rem;;
  left: 655px;
  outline: 0;
  font-size: 15px;
  padding: 0 30px 0 30px;
  text-align: left;
  color: #2AA9E0;
  @media(max-height: 800px) {
      height: 3.6rem;;
  }
  ${(props) => props.isErrored && css`
      border-color: #c53030;
  `}
  ${(props) => props.isFocused && css`
      border-color: #829A83;
  `}
  ${(props) => props.isFilled && css`
      color: #829A83;
  `}
  & + div {
     margin-top: 8px;
   }
  &::placeholder{
    color: #2AA9E0;
  }
  }
 svg {
  color: #2AA9E0;
  font-size: 40px;
  @media(max-height: 800px) {
    font-size: 30px;
    }
}
`;