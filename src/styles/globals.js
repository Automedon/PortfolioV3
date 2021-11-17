import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  ::-webkit-scrollbar{
    width:15px;
  }
  ::-webkit-scrollbar-track{
    background: #d4d4d4;
    box-shadow: 0 0 2px rgba(0,0,0,.2) inset;
  }
  ::-webkit-scrollbar-thumb{
    background: #939393;
    border-radius: 8px;
    border:3px solid #d4d4d4;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: #7c7c7c;
  }
`;

export default GlobalStyles;
