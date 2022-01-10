/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ThemeProvider } from 'styled-components';
import {
  Logo,
  TopNav,
  Text,
  theme,
  Image as UIImage,
  Link as MyLink,
  List as MyList,
  Reset,
} from '@ai/ui';
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
import { Arrowdown, Sevlisticons } from 'libs/ui/src/lib/list/list.style';
import { linkList } from '../data/link-list';
// import Bimage from 'libs/ui/src/lib/image/image';
// import { Pimage, Abutton } from 'libs/ui/src/lib/image/image';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Logo imagePath="image/dv.jpg" size="small" title="salut" />
      <TopNav linkList={linkList} />

      <NormalList color="pink">Engage</NormalList>
      <NormalList color="blue">Motivate</NormalList>
      <NormalList color="green">Achieve</NormalList>
      <Text text="Dream" color="grey" />
      <Text text="Belive" color="grey" />
      <Text text="Achieve" color="grey" />

      <BackgroundImage
        myPath="image/hero.jpg"
        type="background"
        location="null"
      />
      <PhoneImage myPath="image/dreamwall1.png" type="phone" location="null" />
      <HeaderThree color="orange">
        Achieving your goals just got easier...
      </HeaderThree>
      <Alink href="https://apps.apple.com/tt/app/dreamvolt/id1496737573">
        <UIImage myPath="btn-apple.png" type="button" location="null" />
      </Alink>
      <UIImage myPath="btn-google.png" type="button" location="null" />
      <HeaderFour color="grey">Android is coming soon..</HeaderFour>
      <Arrowdown></Arrowdown>

      <HeaderOne>Dreamvolt Everyone</HeaderOne>
      <ShadowParagraph text="description">
        Dreamvolt is a goals and targets setting platform, that provides you
        with pathways to success.
      </ShadowParagraph>
      <PurpleBackground
        myPath="image/bg-4-1.jpg"
        type="purplebackground"
        location="null"
      />
      <EvPhoneImage
        myPath="image/dreamwall1.png"
        type="evphoneimage"
        location="center"
      />
      <Alink href="https://apps.apple.com/tt/app/dreamvolt/id1496737573">
        <EvButton myPath="btn-apple.png" type="evbutton" location="bottom" />
      </Alink>

      <Sevlisticons>hisdasdlkalsdalsdkasdsldkasldkasldkas</Sevlisticons>
      <Sevlisticons>hisdasdlkalsdalsdkasdsldkasldkasldkas</Sevlisticons>
      <Sevlisticons>hisdasdlkalsdalsdkasdsldkasldkasldkas</Sevlisticons>
      <Sevlisticons>hisdasdlkalsdalsdkasdsldkasldkasldkas</Sevlisticons>
      <Sevlisticons>hisdasdlkalsdalsdkasdsldkasldkasldkas</Sevlisticons>
      <Sevlisticons>hi</Sevlisticons>
      <Sevlisticons>hi</Sevlisticons>
      <Sevlisticons>hi</Sevlisticons>
      <EvPhoneImage
        myPath="image/dreamwall1.png"
        type="evphoneimage"
        location="bottom"
      />

      <HeaderOne>Dreamvolt Education</HeaderOne>
      <ShadowParagraph text="description">
        Dreamvolt Education is tailored for Schools & Universities. Providing a
        safe and secure environment for students to unlock their ambitions and
        bring their dreams to life.
      </ShadowParagraph>
      <PurpleBackground
        myPath="image/bg-4-1.jpg"
        type="purplebackground"
        location="null"
      />
      <Alink href="https://apps.apple.com/tt/app/dreamvolt/id1496737573">
        <EvButton myPath="btn-apple.png" type="evbutton" location="null" />
      </Alink>
    </ThemeProvider>
  );
}

export default Index;
