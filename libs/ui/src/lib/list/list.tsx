import * as S from './list.style';
import * as T from './list.type';

const List = ({ children }: T.Tevlisticons) => {
  return <S.Sevlisticons>{children}</S.Sevlisticons>;
};

const Arrowdown = ({ children }: T.Tevlisticons) => {
  return <S.Arrowdown>{children}</S.Arrowdown>;
};

List.defaultProps = {
  children: '',
};

export default List;
