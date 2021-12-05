import { ReactNode } from 'react';

export interface Text {
  text: string;
  color: 'orange' | 'grey' | 'blue' | 'green';
}
export interface StyledText {
  children?: ReactNode;
  color: 'orange' | 'grey' | 'blue' | 'green';
}

export interface StyledList {
  children?: ReactNode;
}
