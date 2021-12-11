import { ThemeProvider } from 'styled-components';
import { Logo, TopNav, Text, theme } from '@ai/ui';
import { UnorderedList, NormalList } from 'libs/ui/src/lib/text/text.style';

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
    <ThemeProvider theme={theme}>
      <Logo imagePath="dv.jpg" size="small" title="salut" />
      <TopNav linkList={linkList} />
      <UnorderedList text="asda" color="grey">
        <NormalList text="Engage" color="pink">
          Engage
        </NormalList>
        <NormalList text="Motivate" color="blue">
          Motivate
        </NormalList>
        <NormalList text="Achieve" color="green">
          Achieve
        </NormalList>{' '}
      </UnorderedList>
      <Text text="Dream" color="grey" />
      <Text text="Belive" color="grey" />
      <Text text="Achieve" color="grey" />
    </ThemeProvider>
  );
}

export default Index;
