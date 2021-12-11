import styled, { css } from 'styled-components';
import * as T from './text.type';

export const Text = styled.h1<T.StyledText>`
  font-size: 30px;
  color: ${({ color = 'grey', theme }) => theme.color[color]};
  line-height: 1.5;
  margin-left: 60px;
`;

export const UnorderedList = styled.ul<T.StyledList>`
  color: ${({ color = 'grey', theme }) => theme.color[color]};
  flex-direction: row;
  list-style-type: none;
  display: flex;
  column-gap: 30px;
`;

export const NormalList = styled.li<T.StyledList>`
  color: ${({ color = 'myfav', theme }) => theme.color[color]};
  padding: 1rem;
  font-size: 24px;
  line-height: 30px;
  font-weight: 500px;
  box-sizing: border-box;
  font-family: Rubik;
  list-style-type: none;
`;
