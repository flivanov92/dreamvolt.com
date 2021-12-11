import { ReactNode } from 'react';

type color = 'orange' | 'grey' | 'blue' | 'green' | 'pink';
export interface Text {
  text: string;
  color: color;
}
export interface StyledText {
  children?: ReactNode;
  color: color;
}

export interface StyledList {
  children?: ReactNode;
  color: color;
  text: string;
}
