import * as S from './top-nav.style';
import * as T from './top-nav.type';

const TopNav = ({ linkList }: T.TopNav) => {
  return (
    <div>
      {linkList.map(
        ({ color, destination, linkType, title, text }: T.LinkNav) => (
          <a title={title} href={destination}>
            {text}
          </a>
        )
      )}
    </div>
  );
};

TopNav.defaultProps = {
  linkList: [],
};

export default TopNav;
