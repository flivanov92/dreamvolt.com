import styled, { css } from 'styled-components';
import * as T from './link.type';

const common = css`
  &:hover {
    color: rgb(18, 190, 255);
  }
`;

export const LinkNormal = styled.a<T.Link>`
  ${common}

  text-transform: uppercase;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid rgb(18, 190, 255);
  }
`;

export const LinkContact = styled.a<T.Link>`
  ${common}
`;
