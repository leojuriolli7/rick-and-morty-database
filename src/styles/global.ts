import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5; 
    --text-title: #363f5f;
    --shape: #ffffff;
    --text: #212529;
    --nav-text: #313131;
  }
 
  * { 
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  html {
      @media (max-width: 1080px){
        font-size: 93.75%; //15px
      }
      @media (max-width: 720px) {
        font-size: 87.5%; //14px
      }
    }
  button {
    cursor: pointer;
  }

  body, input, textarea, button {
  font-family: "Roboto", sans-serif;
	font-weight: 400; 
  } 

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600; 
  }
`;
