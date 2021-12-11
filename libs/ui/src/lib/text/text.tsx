import * as S from './text.style';
import * as T from './text.type';

const Text = ({ text, color }: T.Text) => {
  console.log('eu sunt componentul Text');
  return <S.Text color={color}>{text}</S.Text>;
};

const unorderedList = ({ children }: T.StyledList) => {
  return <S.unorderedList>{children}</S.unorderedList>;
};

Text.defaultprops = {
  text: 'mytext',
  color: 'orange',
};

unorderedList.defaultprops = {
  childred: 'null',
};
export default Text;
