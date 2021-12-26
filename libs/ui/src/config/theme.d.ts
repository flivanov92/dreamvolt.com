import theme from './theme';

type CustomTheme = typeof theme;

export interface Color {
  orange: string;
  green: string;
  blue: string;
  pink: string;
  lightgrey: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
  }
}
