import * as S from './text.style';
import * as T from './text.type';

const Text = ({ text, color }: T.Text) => {
  console.log('eu sunt componentul Text');
  return <S.Text color={color}>{text}</S.Text>;
};

Text.defaultprops = {
  text: 'mytext',
  color: 'orange',
};

export default Text;
