import { Children } from 'react';
import * as S from './text.style';
import * as T from './text.type';

const Text = ({ text, color }: T.Text) => {
  console.log('eu sunt componentul Text');
  return <S.Text color={color}>{text}</S.Text>;
};

const UnorderedList = ({ children, color }: T.UnorderedList) => {
  return <S.UnorderedList color={color}>{children}</S.UnorderedList>;
};

const NormalList = ({ text, color }: T.NormalList) => {
  return <S.NormalList color={color}>{text}</S.NormalList>;
};

const HeaderThree = ({ text, color }: T.HeaderThree) => {
  return <S.HeaderThree color={color}>{text} </S.HeaderThree>;
};

const HeaderFour = ({ text, color }: T.HeaderFour) => {
  return <S.HeaderFour color={color}>{text}</S.HeaderFour>;
};

Text.defaultProps = {
  text: 'mytext',
  color: 'onlygrey',
};

UnorderedList.defaultProps = {
  children: 'null',
  color: 'myfav',
  text: 'text',
};

NormalList.defaultProps = {
  text: 'newtext',
  color: 'specific colours',
};

export default Text;
export { UnorderedList, NormalList, HeaderThree, HeaderFour };
