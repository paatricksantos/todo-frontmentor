import { createGlobalStyle, css } from 'styled-components';

import backgroundImgDark from '../images/bg-desktop-dark.jpg';
import backgroundImgLight from '../images/bg-desktop-light.jpg';
import backgroundMobileImgDark from '../images/bg-mobile-dark.jpg';
import backgroundMobileImgLight from '../images/bg-mobile-light.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
  }

  body{
    background: ${({ theme }) => theme.colors.backgroundColor};
    background-size: 100vw 250px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textColor};

    transition: all .2s ease;
    ${({ theme }) =>
      theme.title === 'dark'
        ? css`
            background: url(${backgroundImgDark}) no-repeat;
          `
        : css`
            background: url(${backgroundImgLight}) no-repeat;
          `}


    @media(max-width:375px){
      ${({ theme }) =>
        theme.title === 'dark'
          ? css`
              background: url(${backgroundMobileImgDark}) no-repeat;
            `
          : css`
              background: url(${backgroundMobileImgLight}) no-repeat;
            `}
    }
  }

  button{
    cursor: pointer;
  }
`;
