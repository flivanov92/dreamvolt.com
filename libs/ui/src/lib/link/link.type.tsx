import { ReactNode } from 'react';

export interface Link {
  title: string;
  children?: ReactNode;
  destination: string;
  linkType: 'normal' | 'email' | 'phone';
  color?: string;
  text?: string;
}
