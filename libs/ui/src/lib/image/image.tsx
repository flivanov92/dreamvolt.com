import * as S from './image.style';
import * as T from './image.type';

const Bimage = ({ type, myPath }: T.MyImage) => {
  return <S.BackgroundImage myPath={myPath} type={type} />;
};

const Pimage = ({ type, myPath }: T.MyImage) => {
  return <S.PhoneImage myPath={myPath} type={type} />;
};
// const Pimage = ({type}): T.MyImage) => {
//     return <S.PhoneImage type="phone"></S.PhoneImage>
// };

Bimage.defaultProps = {
  mypath: 'path',
  type: 'type of the image',
};

Pimage.defaultProps = {
  mypath: 'path',
  type: 'type of the image',
};
export default Bimage;
export { Pimage };
