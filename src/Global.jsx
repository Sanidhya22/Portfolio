import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }

  body {
    position:relative;
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text} !important; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }`;
