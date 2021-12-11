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

Text.defaultprops = {
  text: 'mytext',
  color: 'onlygrey',
};

UnorderedList.defaultprops = {
  children: 'null',
  color: 'myfav',
  text: 'text',
};

NormalList.defaultprops = {
  text: 'newtext',
  color: 'specific colours',
};

export default Text;
export { UnorderedList, NormalList };
