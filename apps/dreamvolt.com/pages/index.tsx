/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ThemeProvider } from 'styled-components';
import { Logo, TopNav, Text, theme, Image as UIImage, Link } from '@ai/ui';
import {
  NormalList,
  HeaderThree,
  HeaderFour,
  ShadowParagraph,
  HeaderOne,
} from 'libs/ui/src/lib/text/text.style';
import {
  BackgroundImage,
  EvButton,
  EvPhoneImage,
  PhoneImage,
  PurpleBackground,
} from 'libs/ui/src/lib/image/image.style';
import { Alink } from 'libs/ui/src/lib/link/link.style';
// import Bimage from 'libs/ui/src/lib/image/image';
// import { Pimage, Abutton } from 'libs/ui/src/lib/image/image';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      <Logo imagePath="image/dv.jpg" size="small" title="salut" />
      <TopNav linkList={linkList} />

      <NormalList color="pink">Engage</NormalList>
      <NormalList color="blue">Motivate</NormalList>
      <NormalList color="green">Achieve</NormalList>
      <Text text="Dream" color="grey" />
      <Text text="Belive" color="grey" />
      <Text text="Achieve" color="grey" />

      <BackgroundImage myPath="image/hero.jpg" type="background" />
      <PhoneImage myPath="image/dreamwall1.png" type="phone" />
      <HeaderThree color="orange">
        Achieving your goals just got easier...
      </HeaderThree>
      <Alink href="https://apps.apple.com/tt/app/dreamvolt/id1496737573">
        <UIImage myPath="btn-apple.png" type="button" />
      </Alink>
      <UIImage myPath="btn-google.png" type="button" />
      <HeaderFour color="grey">Android is coming soon..</HeaderFour>
      <HeaderOne>Dreamvolt Education</HeaderOne>
      <ShadowParagraph text="description">
        Dreamvolt is a goals and targets setting platform, that provides you
        with pathways to success.
      </ShadowParagraph>
      <PhoneImage myPath="image/dreamwall1.png" type="phone" />
      <PurpleBackground myPath="image/bg-4-1.jpg" type="purplebackground" />
      <EvPhoneImage myPath="image/dreamwall1.png" type="evphoneimage" />
      <Alink href="https://apps.apple.com/tt/app/dreamvolt/id1496737573">
        <EvButton myPath="btn-apple.png" type="evbutton" />
      </Alink>
    </ThemeProvider>
  );
}

export default Index;
