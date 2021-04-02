// globalStyles.js
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  /* Default Styles */
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #fafafa;
    color: #333;
    outline: 0;
    border: 0 none;
    text-decoration: none;
  }
  
  /* Heading Styles */
  
  h1, h2{
    font-family: 'Playfair Display', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
  }
  
  h1{
    font-size: 2em;
  }
  h2{
    font-size: 1.7em;
  }
  h3{
    font-size: 1.5em;
  }
  h4{
    font-size: 1.25em;
  }
  h5{
    font-size: 1em;
  }
  
  /* Typography */
  
  p{
    
  }
  
  /* Buttons */
  
  button{
    
  }
  
`;

export default GlobalStyle;