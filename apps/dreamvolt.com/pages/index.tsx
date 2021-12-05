import styled from 'styled-components';
import { Logo, TopNav, Text } from '@ai/ui';
const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  const linkList: any = [
    {
      title: 'mynav is cool',
      destination: '/',
      text: 'home',
      linkType: 'normal',
      color: 'blue',
    },
    {
      title: 'mynav is cool',
      destination: '/contact',
      text: 'everyone',
      linkType: 'normal',
      color: 'grey',
    },
    {
      title: 'mynav is cool',
      destination: '/portocale',
      text: 'education',
      linkType: 'normal',
      color: 'grey',
    },
    {
      title: 'mynav is cool',
      destination: '/kiwi',
      text: 'contact',
      linkType: 'normal',
      color: 'grey',
    },
    {
      title: 'mynav is cool',
      destination: '/grefe',
      text: 'media',
      linkType: 'normal',
      color: 'grey',
    },
  ];
  return (
    <StyledPage>
      <Logo imagePath="dv.jpg" size="small" title="salut" />
      <TopNav linkList={linkList} />

      <Text text="Dream" color="green" />
      <Text text="Belive" color="grey" />
      <Text text="Achieve" color="grey" />
    </StyledPage>
  );
}

export default Index;
