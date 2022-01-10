import { createGlobalStyle } from 'styled-components';

export const ResetCss = createGlobalStyle`
  /* reset css */
  html,
  body {
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* font */
  @font-face {
    font-family: 'dreamvolt';
    src: url('/fonts/dreamvolt.ttf?86aost') format('truetype'),
      url('/fonts/dreamvolt.woff?86aost') format('woff'),
      url('/fonts/dreamvolt.svg?86aost#dreamvolt') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  [class^='dreamvolt-'],
  [class*=' dreamvolt-'] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'dreamvolt' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .dreamvolt-tiktok-1324440243881667301_0:before {
    content: '\e901';
  }
  .dreamvolt-compass2:before {
    content: '\e94a';
  }
  .dreamvolt-alarm:before {
    content: '\e950';
  }
  .dreamvolt-users:before {
    content: '\e972';
  }
  .dreamvolt-binoculars:before {
    content: '\e985';
  }
  .dreamvolt-cogs:before {
    content: '\e995';
  }
  .dreamvolt-stats-bars:before {
    content: '\e99c';
  }
  .dreamvolt-trophy:before {
    content: '\e99e';
  }
  .dreamvolt-road:before {
    content: '\e9b1';
  }
  .dreamvolt-power:before {
    content: '\e9b5';
  }
  .dreamvolt-clipboard:before {
    content: '\e9b8';
  }
  .dreamvolt-link:before {
    content: '\e9cb';
  }
  .dreamvolt-arrow-up2:before {
    content: '\ea3a';
  }
  .dreamvolt-arrow-down2:before {
    content: '\ea3e';
  }
  .dreamvolt-share2:before {
    content: '\ea82';
  }
  .dreamvolt-facebook:before {
    content: '\ea90';
  }
  .dreamvolt-instagram:before {
    content: '\ea92';
  }
  .dreamvolt-whatsapp:before {
    content: '\ea93';
  }
  .dreamvolt-youtube2:before {
    content: '\ea9e';
  }
  .dreamvolt-twitch:before {
    content: '\ea9f';
  }
`;
