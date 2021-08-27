import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroundColor: string;
      primary: string;
      secondary: string;
      tertiary: string;

      textColor: string;
    };
  }
}
