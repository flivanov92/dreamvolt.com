import * as S from './link.style';
import * as T from './link.type';

const Link = ({
  title,
  children,
  destination,
  linkType,
  color,
  text,
}: T.Link) => {
  switch (linkType) {
    case 'normal':
      return (
        <S.LinkNormal
          linkType={linkType}
          destination={destination}
          title={title}
        >
          {text}
        </S.LinkNormal>
      );

    default:
      return (
        <S.LinkNormal
          linkType={linkType}
          destination={destination}
          title={title}
        >
          {text}
        </S.LinkNormal>
      );
  }
};

Link.defaultProps = {
  title: 'dreamvolt',
  destination: '#',
  linkType: 'normal',
  text: 'dreamvolt',
  color: 'blue',
};

export default Link;
