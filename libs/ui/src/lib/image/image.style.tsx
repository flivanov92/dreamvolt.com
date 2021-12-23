import styled, { css } from 'styled-components';
import * as T from './image.type';

export const BackgroundImage = styled.div<T.MyImage>`
  background-position-x: right;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  /* grid-gap: 10px; */
  background-image: url(${({ myPath }) => myPath});
  width: 70%;
  height: 500px;
  position: relative;
  bottom: 200px;
  left: 300px;
`;

export const PhoneImage = styled.div<T.MyImage>`
  background-image: url(${({ myPath }) => myPath});
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 30px;
  /* grid-column: 2/3; */
  /* grid-row: 2/4; */
  position: absolute;
  width: 11%;
  height: 42%;
  left: 1000px;
  bottom: 100px;
`;

export const Button = styled.div<T.MyImage>`
  width: ${({ myPath }) => (myPath === 'btn-apple.png' ? 151 : 169)}px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/image/${({ myPath }) => myPath}');
  display: inline-block;
  margin-left: 50px;
`;
