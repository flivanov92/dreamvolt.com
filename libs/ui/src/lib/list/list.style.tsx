import styled, { css } from 'styled-components';
import * as T from './list.type';

export const Sevlisticons = styled.li<T.Tevlisticons>`
  flex-direction: column;
  display: inline;
  list-style-type: none;
  align-items: center;
  margin-top: 0px;
  margin-left: 30px;
  gap: 20px;
`;

export const Arrowdown = styled.div<T.Tevlisticons>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ color = 'lightblue', theme }) => theme.color[color]};
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: center;

  &::before {
    content: '\\ea3e';
    color: black;
    font-size: 20px;
    font-family: 'dreamvolt';
  }
`;
