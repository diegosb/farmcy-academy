import { createGlobalStyle } from 'styled-components'

const theme = {
  colors: {
    primary: '#32ba69',
    white: '#ffffff',
    lightDark: '#1d1d1d',
    dark: '#131313',
    headers: '#ffffff',
    lightText: '#b2b2b2',
    darkerGrey: '#272727',
    text: '#404241',
    darkText: '#707070',
    footer: '#ebebeb',
    ice: '#f9f9f9',
  },
  font: {
    family: '"Roboto", sans- serif',
    weight: {
      light: '300',
      regular: '400',
      bold: '700',
    },
    size: {
      xsmall: '10px',
      small: '12px',
      regular: '14px',
      medium: '25px',
      large: '28px',
      xlarge: '45px',
      xxlarge: '55px',
      button: '18px',
      title: '18px',
    },
  },
}

export default theme

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      text-size-adjust: 100%;
  }
  
  html, body {
    background-color: #131313;
    font-family: ${theme.font.family};
    font-size: ${theme.font.size.regular};
    color: ${theme.colors.white};
  }
  
  body {
    max-width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
    margin: 0 auto;
    padding: 0;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5{
    color: ${theme.colors.white};
    line-height: 1.25;
    font-weight: ${theme.font.weight.bold};
  }

  h1 {
    font-size: ${theme.font.size.xlarge};
  }
  
  h2 {
    font-size: ${theme.font.size.large};
  }
  
  h3 {
    font-size: ${theme.font.size.medium};
  }
  
  h4 {
    font-size: ${theme.font.size.regular};
  }

`
