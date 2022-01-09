import styled, { css } from 'styled-components';
import * as T from './list.type';

export const Sevlisticons = styled.li<T.Tevlisticons>`
  display: flex;
  flex-direction: column;
  /* display: inline-block; */
  list-style-type: none;
  gap: 2rem;
  align-items: center;
  margin-top: 30px;
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
  }
`;
