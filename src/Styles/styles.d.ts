// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    red: string;
    black: string;
    dark: string;
    gray: string;
    silver: string;
    white: string;
    
    gradientBlue: Array<string>;
    gradientRed: Array<string>;
    gradientPurple: Array<string>;
    gradientGreen: Array<string>;
    gradientPink: Array<string>;
    gradientBlack: Array<string>;
    gradientDark: Array<string>;
  }
}