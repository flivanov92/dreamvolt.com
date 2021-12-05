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
          href={destination}
        >
          {text}
        </S.LinkNormal>
      );

    case 'email':
      return (
        <S.LinkContact
          href="mailto: social@dreamvolt.com"
          linkType={linkType}
          destination={destination}
          title={title}
        >
          {text}
        </S.LinkContact>
      );
    case 'phone':
      return (
        <S.LinkContact
          href="tel:+971 563384405"
          linkType={linkType}
          destination={destination}
          title={title}
        >
          {text}
        </S.LinkContact>
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
