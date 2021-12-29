import * as S from './image.style';
import * as T from './image.type';

const BackgroundImage = ({ type, myPath }: T.MyImage) => {
  switch (type) {
    case 'button':
      return <S.Button myPath={myPath} />;

    case 'background':
      return <S.BackgroundImage myPath={myPath} />;

    case 'phone':
    default:
      return <S.PhoneImage myPath={myPath} />;

    case 'purplebackground':
      return <S.PurpleBackground myPath={myPath} />;

    case 'evbutton':
      return <S.EvButton myPath={myPath} />;

    case 'evphoneimage':
      return <S.EvPhoneImage myPath={myPath} />;
  }
};

BackgroundImage.defaultProps = {
  mypath: '',
  type: 'type of the image',
};

export default BackgroundImage;
