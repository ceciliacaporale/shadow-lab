import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundPreview: string;
      surface: string;
      pink: string;
      blue: string;
      black: string;
      white: string;
      text: string;
      muted: string;
      yellow: string;  
    };
  }
}
