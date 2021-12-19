import styled, { css } from 'styled-components';
import * as T from './image.type';

export const BackgroundImage = styled.div<T.MyImage>`
  background-position-x: right;
  background-repeat: no-repeat;
  background-size: cover;
  /* display: grid; */
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
  margin-left: 30px;
  /* grid-column: 2/3; */
  /* grid-row: 2/4; */
  position: absolute;
  width: 9%;
  height: 30%;
  background-repeat: no-repeat;
  background-size: cover;
  left: 900px;
  bottom: 200px;
`;

export const AppleButton = styled.div<T.MyImage>`
  display: flex;
  margin-left: 20px;
  position: absolute;
`;

export const GoogleButton = styled.div<T.MyImage>`
  margin-left: -200px;
  display: flex;
  position: absolute;
`;
