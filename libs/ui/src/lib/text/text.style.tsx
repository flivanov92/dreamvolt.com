import styled, { css } from 'styled-components';
import * as T from './text.type';

export const Text = styled.h1<T.StyledText>`
  font-size: 30px;
  color: ${({ color }) => color};
  line-height: 1.5;
  margin-left: 20px;
`;

export const unorderedList = styled.ul<T.StyledList>`
  flex-direction: row;
  list-style-type: none;
  display: flex;
  column-gap: 30px;
`;

export const normalList = styled.li<T.StyledList>`
  padding: 1rem;
  font-size: 24px;
  line-height: 30px;
  font-weight: 500px;
  box-sizing: border-box;
  font-family: Rubik;
`;

const nthchildOne = css`
  &:nth-child(1) {
    color: #e70fc6fa;
  }
`;
const nthchildTwo = css`
  &:nth-child(2) {
    color: #12befff7;
  }
`;
const nthchildThree = css`
  &:nth-child(3) {
    color: #0bc324fc;
  }
`;
