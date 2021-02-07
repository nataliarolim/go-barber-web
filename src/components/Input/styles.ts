import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}


export const Container = styled.div<ContainerProps>`
  background: #232119;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  color: #666360;
  border: 2px solid #232119;

  & + div {
      margin-top: 8px;
    }

  ${props => props.isErrored && css`
  border-color: #c53030;
  `}

  ${props => props.isFocused && css`
    color: #ff9000;
    border-color: #ff9000;
  `}

  ${props => props.isFilled && css`
    color: #ff9000;
  `}

  input {

    flex: 1;
    border: 0;
    background: transparent;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
      -webkit-transition-delay: 9999s;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)` // esse estilo vai ser aplicado no container do Tooltip
  height: 20px;
  margin-left: 16px;

  svg {
      margin: 0;
    }

  span {
    background: #c53030;
    color: #fff;
  &::before {
    border-color: #c53030 transparent;
  }
}

`;
